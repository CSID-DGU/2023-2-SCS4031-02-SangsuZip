import { ThumbnailProps } from "@/types/common/Thumbnail.types";
import * as S from "./style";
import { useNavigate } from "react-router";

function Thumbnail({
  imageURL,
  tags,
  title,
  contents,
  author,
  createdAt,
}: ThumbnailProps) {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate("/feed/656d7eb73a1b9e7ade932f8a")}>
      <S.Image src={imageURL}></S.Image>
      <S.ContentContainer>
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>#{tag}</S.Tag>
          ))}
        </S.TagContainer>
        <S.Title>{title}</S.Title>
        <S.Content>{contents}</S.Content>
        <S.Author>{author}</S.Author>
        <S.Date>{createdAt.slice(0, 10)}</S.Date>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Thumbnail;
