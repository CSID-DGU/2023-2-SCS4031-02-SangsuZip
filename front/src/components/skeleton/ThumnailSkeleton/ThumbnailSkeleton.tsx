import * as S from "./style";

function ThumbnailSkeleton() {
  return (
    <S.Container>
      <S.Skeleton $width={20} $height={12.5} $isImage={true} />
      <S.ContentContainer>
        <S.TagContainer>
          <S.Skeleton $width={6} $height={1} />
        </S.TagContainer>
        <S.Skeleton $width={10} $height={3} />
        <S.Skeleton $width={16} $height={4} />
        <S.RecommendTagContainer>
          <S.Skeleton $width={10} $height={1} />
        </S.RecommendTagContainer>
        <S.Skeleton $width={2} $height={2} $alignSelf={true} />
        <S.Skeleton $width={6} $height={2} $alignSelf={true} />
      </S.ContentContainer>
    </S.Container>
  );
}

export default ThumbnailSkeleton;
