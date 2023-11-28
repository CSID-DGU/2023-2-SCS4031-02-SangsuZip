import { Fragment, useCallback, useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import * as S from "./style";
import Button from "../../components/common/button/Button";
import theme from "../../styles/theme";
import TagModal from "../../components/TagModal/TagModal";
import { writeFeed } from "../../api/feeds/writeFeed.api";

function Write() {
  const [value, setValue] = useState<string>();
  const [hashtag, setHashtag] = useState<string | "">("");
  const [hashArr, setHashArr] = useState<string[]>([]);
  const [title, setTitle] = useState<string | "">("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [feedId, setFeedId] = useState<string>("");

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

  const onSubmitHandler = () => {
    const writeData = {
      title,
      contents: value!,
      tags: hashArr!,
      author: "656304f20baa7b3a7f392f9e",
    };
    writeFeed(writeData).then((res) => {
      if (res.status === 201) {
        setFeedId(res.data._id);
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
          <MDEditor
            data-color-mode="light"
            height={"100vh"}
            value={value}
            placeholder="내용을 입력해주세요!"
            onChange={setValue}
          />
        </S.EditorContainer>
      </S.Container>
      {isModalOpen && (
        <TagModal
          setIsModalOpen={setIsModalOpen}
          value={value!}
          hashArr={hashArr}
          feedId={feedId}
        />
      )}
    </Fragment>
  );
}

export default Write;
