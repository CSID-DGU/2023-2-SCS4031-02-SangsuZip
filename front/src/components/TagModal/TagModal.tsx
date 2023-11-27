import React, { useEffect, useState } from "react";
import * as S from "./style";
import { createPortal } from "react-dom";
import Thumbnail from "../common/thumbnail/Thumbnail";
import TagModalSkeleton from "../skeleton/TagModalSkeleton/TagModalSkeleton";
import { getRecommend } from "../../api/feeds/getRecommend";
import { postRecommendTags } from "../../api/feeds/postRecommendTags";

type RecommendTagsProps = {
  tag: string;
  description: string;
};

function TagModal({
  setIsModalOpen,
  value,
  hashArr,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  hashArr: string[];
}) {
  const [selectedTag, setSelectedTag] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recommendTags, setRecommendTags] = useState<RecommendTagsProps[]>();

  useEffect(() => {
    const postData = {
      content: value,
    };
    getRecommend(postData)
      .then((res) => {
        setRecommendTags(res.data.body);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const closeButtonHandler = () => {
    const postData = {
      tags: hashArr,
      recommendedTags: recommendTags!.map((recommendTag) => recommendTag.tag),
    };
    postRecommendTags(postData).then((res) => {
      if (res.status === 201) {
        setIsModalOpen(false);
      }
    });
  };

  return createPortal(
    <S.ModalOverlay>
      {isLoading ? (
        <TagModalSkeleton setIsModalOpen={setIsModalOpen} />
      ) : (
        <S.Container>
          <S.RecTagListContainer>
            {recommendTags &&
              recommendTags.map((_, index) => (
                <S.TagButton
                  key={index}
                  $isSelected={index === selectedTag}
                  onClick={() => setSelectedTag(index)}
                >
                  {recommendTags[index].tag}
                </S.TagButton>
              ))}
          </S.RecTagListContainer>
          <S.RecTagDescriptionContainer>
            <S.CloseButton onClick={closeButtonHandler} />
            <S.Description>
              작성해주신 태그 기반으로 추천드리는 다음 공부 주제입니다!
            </S.Description>
            <S.TagNameContainer>
              <S.Image />
              <S.TagName>{recommendTags![selectedTag].tag}</S.TagName>
            </S.TagNameContainer>
            <S.TagDescription>
              {recommendTags![selectedTag].description}
            </S.TagDescription>
            <S.Description>
              {recommendTags![selectedTag].tag}가 포함된 게시물을 추천드립니다!
            </S.Description>
            <S.FeedThumbnailContainer>
              <Thumbnail
                key={1}
                imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
                title="애플에 대해 알아보자."
                contents="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
                tags={["애플", "감성", "아이폰"]}
                author="정원호"
                createdAt="2021.10.18T"
                recommendTags={["스티브잡스", "아이패드", "맥북"]}
              />
              <Thumbnail
                key={2}
                imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
                title="애플에 대해 알아보자."
                contents="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
                tags={["애플", "감성", "아이폰"]}
                author="정원호"
                createdAt="2021.10.18T"
                recommendTags={["스티브잡스", "아이패드", "맥북"]}
              />
              <Thumbnail
                key={3}
                imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
                title="애플에 대해 알아보자."
                contents="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
                tags={["애플", "감성", "아이폰"]}
                author="정원호"
                createdAt="2021.10.18T"
                recommendTags={["스티브잡스", "아이패드", "맥북"]}
              />
            </S.FeedThumbnailContainer>
          </S.RecTagDescriptionContainer>
        </S.Container>
      )}
    </S.ModalOverlay>,
    document.getElementById("tag-modal")!
  );
}

export default TagModal;
