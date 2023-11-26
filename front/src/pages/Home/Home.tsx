import { useEffect, useState } from "react";
import Button from "../../components/common/button/Button";
import Thumbnail from "../../components/common/thumbnail/Thumbnail";
import theme from "../../styles/theme";
import * as S from "./style";
import SearchIcon from "/assets/icons/SearchIcon.svg";
import { getFeed } from "../../api/feeds/getFeed";
import { ThumbnailProps } from "../../types/common/thumbnail.types";

function Home() {
  const [feeds, setFeeds] = useState<ThumbnailProps[]>();

  useEffect(() => {
    getFeed().then((res) => {
      setFeeds(res);
    });
  }, []);

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchIcon src={SearchIcon} />
        <S.SearchBar placeholder="검색어를 입력해주세요." />
      </S.SearchContainer>
      <S.FeedContainer>
        <S.CategoryContainer>
          <Button
            $width={9.625}
            $height={3.75}
            $backgroundColor="white"
            $borderColor="white"
            $color={theme.color.point1}
            text="전체 게시물"
            $hasBorder={true}
            onClick={() => {}}
          />
          <Button
            $width={9.625}
            $height={3.75}
            $backgroundColor={theme.color.gray40}
            $borderColor={theme.color.gray40}
            $color={theme.color.gray70}
            text="내 게시물"
            $hasBorder={true}
            onClick={() => {}}
          />
        </S.CategoryContainer>
        <S.ThumbnailContainer>
          {feeds &&
            feeds.map((feed, index) => (
              <Thumbnail
                key={index}
                imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
                title={feed.title}
                contents={feed.contents}
                tags={feed.tags}
                author={feed.author}
                createdAt={feed.createdAt}
                recommendTags={["애플", "스티브잡스", "아이패드"]}
              />
            ))}
        </S.ThumbnailContainer>
      </S.FeedContainer>
    </S.Container>
  );
}

export default Home;
