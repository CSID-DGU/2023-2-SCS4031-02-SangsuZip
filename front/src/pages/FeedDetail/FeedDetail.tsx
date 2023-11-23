import React from "react";
import * as S from "./style";
import Feed from "../../components/Feed/Feed";

function FeedDetail() {
  return (
    <S.Container>
      <S.FeedContainer>
        <Feed />
      </S.FeedContainer>
    </S.Container>
  );
}

export default FeedDetail;
