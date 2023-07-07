import React from "react";
import { styled } from "styled-components";
import Button from "../Components/Button";

const handleClickAlert = () => {
  alert("버튼을 만들어보세요");
};

const handleClickPrompt = () => {
  prompt("어렵나요?");
};

function Buttons() {
  return (
    <>
      <h1>Button</h1>
      <ButtonSection>
        <Button size={"large"} color={"primary"} onClick={handleClickAlert}>
          Large Primary Button
        </Button>
        <Button size={"medium"} color={"primary"}>
          Medium
        </Button>
        <Button size={"small"} color={"primary"}>
          Small
        </Button>
      </ButtonSection>
      <ButtonSection>
        <Button size={"large"} color={"negative"} onClick={handleClickPrompt}>
          Large Primary Button
        </Button>
        <Button size={"medium"} color={"negative"}>
          Medium
        </Button>
        <Button size={"small"} color={"negative"}>
          Small
        </Button>
      </ButtonSection>
    </>
  );
}

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
`;
export default Buttons;
