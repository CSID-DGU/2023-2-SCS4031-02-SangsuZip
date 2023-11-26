import * as S from "./style";
import ThumbnailSkeleton from "../ThumnailSkeleton/ThumbnailSkeleton";

function TagModalSkeleton() {
  return (
    <S.Container>
      <S.RecTagListContainer>
        {Array.from({ length: 3 }).map((_, index) => (
          <S.TagButton key={index} $isSelected={index === 0}>
            <S.SkeletonTag $width={8} $height={2} />
          </S.TagButton>
        ))}
      </S.RecTagListContainer>
      <S.RecTagDescriptionContainer>
        <S.CloseButton />
        <S.Description>
          작성해주신 태그 기반으로 추천드리는 다음 공부 주제입니다!
        </S.Description>
        <S.TagNameContainer>
          <S.Image />
          <S.TagName>
            <S.SkeletonTag $width={6} $height={2} />
          </S.TagName>
        </S.TagNameContainer>
        <S.TagDescription>
          <S.SkeletonTag $width={60} $height={2} />
        </S.TagDescription>
        <S.Description>
          <S.SkeletonTag $width={16} $height={2} />
        </S.Description>
        <S.FeedThumbnailContainer>
          <ThumbnailSkeleton />
          <ThumbnailSkeleton />
          <ThumbnailSkeleton />
        </S.FeedThumbnailContainer>
      </S.RecTagDescriptionContainer>
    </S.Container>
  );
}

export default TagModalSkeleton;
