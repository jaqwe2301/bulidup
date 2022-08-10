import React from "react";
import { HomeDiv, MainButton } from "../styledComponents";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
=======
import "../index.css";
>>>>>>> Stashed changes

const Home = () => {
  const navigate = useNavigate();
  const goTeamBuild = () => {
    navigate("/team_build");
  };

  return (
    <HomeDiv>
      <div className="home_wrapper">
        <img src="/img/logo.png" alt="buildup_logo.png" />
        <div className="dsc_wrapper">
<<<<<<< Updated upstream
          <h1>빌덥</h1>
          <p>
=======
          <h1 className="score600">빌덥</h1>
          <p className="score500">
>>>>>>> Stashed changes
            빌덥은 대학생을 대상으로 팀 빌딩과 외주가 가능한 커뮤니티 플랫폼입니다.
            <br />
            전문 기술 및 금전 등의 부족으로 외주를 맡기려는 대학생과 포트폴리오를
            <br />
            쌓으려는 대학생들의 니즈를 맞추었습니다.
            <br />
            빌덥과 함께 대학 생활의 질을 높여볼까요?
          </p>
        </div>
<<<<<<< Updated upstream
        <MainButton onClick={goTeamBuild} type="button" fontSize="17px" style={{ marginTop: "100px" }}>
=======
        <MainButton
          onClick={goTeamBuild}
          type="button"
          fontSize="17px"
          className="score500"
          style={{ marginTop: "100px" }}
        >
>>>>>>> Stashed changes
          시작하기!
        </MainButton>
      </div>
    </HomeDiv>
  );
};

export default Home;
