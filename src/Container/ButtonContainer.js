import React from "react";
import { styled } from "styled-components";
import Button from "../Components/Button";
import { icons } from "../assets/icons";

const handleClickAlert = () => {
  alert("버튼을 만들어보세요");
};

const handleClickPrompt = () => {
  prompt("어렵나요?");
};

function ButtonContainer() {
  return (
    <>
      <h1>Button</h1>
      <ButtonSection>
        <Button
          size={"large"}
          color={"primary"}
          onClick={handleClickAlert}
          icon={icons.go()}
        >
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
        <Button
          size={"large"}
          color={"negative"}
          onClick={handleClickPrompt}
          icon={icons.alert()}
        >
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
export default ButtonContainer;
