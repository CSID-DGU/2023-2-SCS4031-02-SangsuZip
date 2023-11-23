import React from "react";
import * as S from "./style";
import Feed from "../../components/Feed/Feed";

function FeedDetail() {
  return (
    <S.Container>
      <S.TagContainer>
        <S.TagListTitle>Tag List</S.TagListTitle>
      </S.TagContainer>
      <S.FeedContainer>
        <Feed />
      </S.FeedContainer>
    </S.Container>
  );
}

export default FeedDetail;
