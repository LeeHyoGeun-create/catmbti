import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import QuestionData from "../data/questionData";

function Question() {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickButton = (left, type) => {
    if (left) {
      const newTotalScore = totalScore.map((obj) =>
        obj.id === type ? { ...obj, score: obj.score + 1 } : obj
      );
      setTotalScore(newTotalScore);
    }

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <>
      <Wrapper>
        <ProgressBar
          style={{ marginTop: "20px" }}
          striped
          variant="danger"
          now={QuestionData[questionNo].gauge}
        />
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
            onClick={() =>
              handleClickButton(true, QuestionData[questionNo].type)
            }
          >
            {QuestionData[questionNo].answerA}
          </Button>
          <Button
            style={{
              width: "40%",
              minHeight: "200px",
              fontSize: "15pt",
              marginLeft: "20px",
            }}
            onClick={() => handleClickButton(false)}
          >
            {QuestionData[questionNo].answerB}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  text-align: center;
`;

const ButtonGroup = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Question;
