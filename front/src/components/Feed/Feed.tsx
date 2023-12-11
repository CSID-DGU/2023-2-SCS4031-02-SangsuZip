import * as S from "./style";
import theme from "@/styles/theme";
import Button from "@/components/common/button/Button";
import MDEditor from "@uiw/react-md-editor";
import ArrowUp from "/assets/icons/ArrowUp.svg";
import ArrowDown from "/assets/icons/ArrowDown.svg";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { getFeed } from "@/api/feeds/getFeed.api";
import { useAtom } from "jotai";
import { FeedAtom } from "@/stores/jotai/FeedStore";

function Feed() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const feedId = queryParams.get("feedId");
  const [feed, setFeed] = useAtom(FeedAtom);

  useEffect(() => {
    getFeed(feedId!).then((res) => {
      console.log(res);

      setFeed((prev) => ({
        ...prev,
        _id: res.data._id,
        title: res.data.title,
        contents: res.data.contents,
        tags: res.data.tags,
        recommendedTags: res.data.recommendedTags,
        createdAt: res.data.createdAt,
        author: res.data.author,
      }));
    });
  }, []);

  return (
    <S.Container>
      <S.TopContainer>
        <S.TagContainer>
          {feed && feed.tags.map((tag, index) => <div key={index}>#{tag}</div>)}
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
        <S.Title>{feed.title}</S.Title>
        <S.AuthorContainer>
          <S.Author>{feed.author}</S.Author>
          <S.Date>{feed.createdAt.slice(0, 10)}</S.Date>
        </S.AuthorContainer>
      </S.TopContainer>
      <S.Content>
        <MDEditor.Markdown
          style={{
            backgroundColor: "white",
            color: "black",
          }}
          source={feed.contents}
        />
      </S.Content>
      <S.TagContainer>
        추천 태그
        {feed &&
          feed.recommendedTags.map((recommendedTag, index) => (
            <div key={index}>{recommendedTag}</div>
          ))}
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
