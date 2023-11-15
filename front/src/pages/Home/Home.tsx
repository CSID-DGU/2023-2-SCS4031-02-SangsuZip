import Button from "../../components/common/button/Button";
import Thumbnail from "../../components/common/thumbnail/Thumbnail";
import theme from "../../styles/theme";
import * as S from "./style";
import SearchIcon from "/assets/icons/SearchIcon.svg";

function Home() {
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
          <Thumbnail
            key={1}
            imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
            title="애플에 대해 알아보자."
            content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
            tags={["애플", "감성", "아이폰"]}
            author="정원호"
            date="2021.10.18"
          />
          <Thumbnail
            key={2}
            imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
            title="애플에 대해 알아보자."
            content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
            tags={["애플", "감성", "아이폰"]}
            author="정원호"
            date="2021.10.18"
          />
          <Thumbnail
            key={3}
            imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
            title="애플에 대해 알아보자. 그만 알아보자"
            content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
            tags={["애플", "감성", "아이폰"]}
            author="정원호"
            date="2021.10.18"
          />
          <Thumbnail
            key={4}
            imageURL="https://ssl.pstatic.net/melona/libs/1468/1468973/293be9cc746b178ba5ef_20231018174336732_1.jpg"
            title="애플에 대해 알아보자."
            content="애플은 원래부터 멋에 특화되어 있는 브랜드이다. 따라서 /애플/이라는 단어는 감성을 자극하는 단어이다. "
            tags={["애플", "감성", "아이폰"]}
            author="정원호"
            date="2021.10.18"
          />
        </S.ThumbnailContainer>
      </S.FeedContainer>
    </S.Container>
  );
}

export default Home;
