import { ThumbnailProps } from "@/types/common/Thumbnail.types";
import * as S from "./style";
import { useNavigate } from "react-router";

function Thumbnail({
  feedId,
  image,
  tags,
  title,
  contents,
  author,
  date,
}: ThumbnailProps) {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate(`/feed/?feedId=${feedId}`)}>
      <S.Image src={image}></S.Image>
      <S.ContentContainer>
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>#{tag}</S.Tag>
          ))}
        </S.TagContainer>
        <S.Title>{title}</S.Title>
        <S.Content>{contents}</S.Content>
        <S.Author>{author}</S.Author>
        <S.Date>{date.slice(0, 10)}</S.Date>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Thumbnail;
