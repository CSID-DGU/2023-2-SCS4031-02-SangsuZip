import React, { useState } from "react";
import * as S from "./style";
import { createPortal } from "react-dom";
import Thumbnail from "../common/thumbnail/Thumbnail";
function TagModal({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedTag, setSelectedTag] = useState<number>(0);

  return createPortal(
    <S.ModalOverlay>
      <S.Container>
        <S.RecTagListContainer>
          {Array.from({ length: 3 }).map((_, index) => (
            <S.TagButton
              key={index}
              $isSelected={index === selectedTag}
              onClick={() => setSelectedTag(index)}
            >
              태그 {index + 1}
            </S.TagButton>
          ))}
        </S.RecTagListContainer>
        <S.RecTagDescriptionContainer>
          <S.CloseButton onClick={() => setIsModalOpen(false)} />
          <S.Description>
            작성해주신 태그 기반으로 추천드리는 다음 공부 주제입니다!
          </S.Description>
          <S.TagNameContainer>
            <S.Image />
            <S.TagName>태그 1</S.TagName>
          </S.TagNameContainer>
          <S.TagDescription>
            태그 1에 관련된 설명이 한 줄로 들어갈 예정입니다.
          </S.TagDescription>
          <S.Description>
            태그 1을 포함하는 게시물을 추천드립니다!
          </S.Description>
          <S.FeedThumbnailContainer>
            <Thumbnail
              key={1}
              imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
              title="애플에 대해 알아보자."
              content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
              tags={["애플", "감성", "아이폰"]}
              author="정원호"
              date="2021.10.18"
              recommendTags={["스티브잡스", "아이패드", "맥북"]}
            />
            <Thumbnail
              key={2}
              imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
              title="애플에 대해 알아보자."
              content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
              tags={["애플", "감성", "아이폰"]}
              author="정원호"
              date="2021.10.18"
              recommendTags={["스티브잡스", "아이패드", "맥북"]}
            />
            <Thumbnail
              key={3}
              imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
              title="애플에 대해 알아보자."
              content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
              tags={["애플", "감성", "아이폰"]}
              author="정원호"
              date="2021.10.18"
              recommendTags={["스티브잡스", "아이패드", "맥북"]}
            />
          </S.FeedThumbnailContainer>
        </S.RecTagDescriptionContainer>
      </S.Container>
    </S.ModalOverlay>,
    document.getElementById("tag-modal")!
  );
}

export default TagModal;
