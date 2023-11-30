import * as S from "./style";
import theme from "@/styles/theme";
import Button from "@/components/common/button/Button";
import MDEditor from "@uiw/react-md-editor";
import ArrowUp from "/assets/icons/ArrowUp.svg";
import ArrowDown from "/assets/icons/ArrowDown.svg";

function Feed() {
  return (
    <S.Container>
      <S.TopContainer>
        <S.TagContainer>
          <div># 태그1</div>
          <div># 태그2</div>
          <div># 태그3</div>
        </S.TagContainer>
        <Button
          $width={3.625}
          $height={1.1875}
          $backgroundColor="white"
          $borderColor="white"
          $color={theme.color.gray70}
          $fontSize={0.75}
          text="URL 복사"
          onClick={() => {
            console.log("URL 복사");
          }}
          $hasBorder={false}
        />
      </S.TopContainer>
      <S.TopContainer>
        <S.Title>제목</S.Title>
        <S.AuthorContainer>
          <S.Author>작성자</S.Author>
          <S.Date>2023.08.24</S.Date>
        </S.AuthorContainer>
      </S.TopContainer>
      <S.Content>
        <MDEditor.Markdown
          style={{
            backgroundColor: "white",
            color: "black",
          }}
          source={`# 안녕하세요

## 잘 되나요?

두 칸씩 띄우는거 확인

`}
        />
      </S.Content>
      <S.TagContainer>
        태그
        <div># 태그1</div>
        <div># 태그2</div>
        <div># 태그3</div>
      </S.TagContainer>
      <S.NeighborContainer>
        <S.NeighborFeed>
          <S.NeighborType>이전 글</S.NeighborType>
          <S.NeighborTitle>제목</S.NeighborTitle>
          <S.NeighborIcon src={ArrowUp} />
        </S.NeighborFeed>
        <S.Line />
        <S.NeighborFeed>
          <S.NeighborType>다음 글</S.NeighborType>
          <S.NeighborTitle>제목</S.NeighborTitle>
          <S.NeighborIcon src={ArrowDown} />
        </S.NeighborFeed>
      </S.NeighborContainer>
    </S.Container>
  );
}

export default Feed;
