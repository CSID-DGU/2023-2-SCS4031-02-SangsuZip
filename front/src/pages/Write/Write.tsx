import { Fragment, useCallback, useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { FileDrop } from "react-file-drop";
import * as S from "./style";
import { writeFeed } from "../../api/feeds/writeFeed.api";
import Tooltip from "../../components/common/tooltip/Tooltip";
import TagModal from "../../components/TagModal/TagModal";
import Button from "../../components/common/button/Button";
import theme from "../../styles/theme";
import { useQueryClient } from "react-query";
import { getRecommend } from "../../api/feeds/getRecommend.api";
import { RecommendedTagsStore } from "../../stores/jotai/RecommendedStore";
import { postImage } from "../../api/feeds/postImage.api";
import { useSetAtom } from "jotai";

function Write() {
  const [value, setValue] = useState<string>();
  const [hashtag, setHashtag] = useState<string | "">("");
  const [hashArr, setHashArr] = useState<string[]>([]);
  const [title, setTitle] = useState<string | "">("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [feedId, setFeedId] = useState<string>("");

  const setPrefetchData = useSetAtom(RecommendedTagsStore);

  const queryClient = useQueryClient();

  const onChangeHashTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtag(e.target.value);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onKeyUpHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const $hashArr = document.querySelector(".hashArr");
      const $hashTags = document.createElement("div");
      $hashTags.className = "hashTags";
      $hashTags.style.color = theme.color.point1;
      $hashTags.style.border = `1px solid ${theme.color.gray40}`;
      $hashTags.style.borderRadius = "0.75rem";
      $hashTags.style.backgroundColor = "white";
      $hashTags.style.padding = "0.5rem 1rem";
      $hashTags.style.cursor = "pointer";

      const value = (e.target as HTMLInputElement).value;

      $hashTags.addEventListener("click", () => {
        $hashArr?.removeChild($hashTags);
        setHashArr(hashArr.filter((hash) => hash));
      });
      /**
       * 태그 입력 값이 있고, Enter를 눌렀을 때 태그 추가.
       */
      if (e.key === "Enter" && value.trim() !== "") {
        $hashTags.innerHTML = `<span>#${value}</span>`;
        $hashArr?.appendChild($hashTags);
        setHashArr((prev) => [...prev, value]);
        setHashtag("");

        if (hashArr.length === 2) {
          // feedId 받아오기
          queryClient.prefetchQuery(
            ["recommendedTags", "656d7eb73a1b9e7ade932f8a"],
            () =>
              getRecommend({
                tags: [...hashArr, hashtag],
                feedId: "656d7eb73a1b9e7ade932f8a",
              }).then((res) => {
                setPrefetchData(res.data);
              })
          );
        }
      }
      /**
       * 태그 입력 값이 없고, Backspace를 눌렀을 때 마지막 태그 삭제.
       */
      if (
        e.key === "Backspace" &&
        hashtag.length === 0 &&
        hashArr.length !== 0
      ) {
        $hashArr?.lastElementChild?.remove();
        setHashArr(hashArr.slice(0, -1));
      }
    },
    [hashArr, hashtag]
  );

  const onDragHandler = (file: File) => {
    const formData = new FormData();
    formData.append("img", file);

    const headers = {
      "Content-Type": file.type,
      Accept: "application/formData",
    };
    if (file.size >= 200000) {
      alert("파일 사이즈는 2MB 미만까지 업로드 가능합니다.");
    } else if (
      file.type == "image/png" ||
      file.type == "image/jpg" ||
      file.type == "image/jpeg"
    ) {
      // S3에 이미지 업로드 후, url 반환 받기
      postImage(formData, headers).then((res) => {
        const imgUrl = res.data.imgUrl;
        const newValue = value + "\n\n ![" + file.name + "](" + imgUrl + ")";
        setValue(newValue);
      });
    } else {
      alert("PNG, JPG, JPEG 파일만 업로드 가능합니다.");
    }
    setIsDrag(false);
  };

  const onSubmitHandler = () => {
    const writeData = {
      title,
      contents: value!,
      tags: hashArr!,
      userId: localStorage.getItem("userId")!,
      nickname: localStorage.getItem("email")!,
    };
    writeFeed(writeData).then((res) => {
      if (res.statusCode === 200) {
        setFeedId(res.data.feedId);
        setIsModalOpen(true);
      }
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <Fragment>
      <S.Container>
        <S.TopContainer>
          <S.TitleContainer>
            <S.Title
              placeholder="제목을 입력해주세요."
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
            <S.TagContainer>
              <S.EnteredTag className="hashArr"></S.EnteredTag>
              {hashArr.length === 3 ? null : (
                <S.TagInput
                  placeholder="태그를 입력해주세요."
                  type="text"
                  value={hashtag}
                  onChange={onChangeHashTag}
                  onKeyUp={onKeyUpHandler}
                />
              )}
              <Tooltip
                $width={25}
                $height={3}
                top={0}
                left={0}
                content="태그를 먼저 입력해주시면 업로드시 더 빠르게 추천이 가능해요."
              />
            </S.TagContainer>
          </S.TitleContainer>
          <S.ButtonContainer>
            <Button
              $width={5}
              $height={2}
              text="임시저장"
              $hasBorder={true}
              $backgroundColor={theme.color.gray40}
              $borderColor={theme.color.gray40}
              $color={theme.color.gray80}
              onClick={() => {}}
            />
            <Button
              $width={5}
              $height={2}
              text="업로드"
              $hasBorder={true}
              $backgroundColor={theme.color.point1}
              $borderColor={theme.color.point1}
              $color="white"
              onClick={onSubmitHandler}
            />
          </S.ButtonContainer>
        </S.TopContainer>
        <S.EditorContainer>
          <FileDrop
            onDragOver={() => setIsDrag(true)}
            onDragLeave={() => setIsDrag(false)}
            onDrop={(file) => onDragHandler(file![0])}
          >
            <MDEditor
              data-color-mode="light"
              height={"100vh"}
              value={value}
              placeholder="내용을 입력해주세요!"
              onChange={setValue}
              style={{ backgroundColor: isDrag ? theme.color.gray40 : "white" }}
            />
          </FileDrop>
        </S.EditorContainer>
      </S.Container>
      {isModalOpen && (
        <TagModal
          setIsModalOpen={setIsModalOpen}
          hashArr={hashArr}
          feedId={feedId}
        />
      )}
    </Fragment>
  );
}

export default Write;
