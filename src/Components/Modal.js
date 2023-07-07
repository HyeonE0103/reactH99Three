import React from "react";
import { styled } from "styled-components";
import Button from "./Button";

export function Modal({ onToggle }) {
  return (
    <>
      <ModalWrap>
        <ModalContainer>
          <div>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 닫히지 않아요.
          </div>
          <ButtonSection>
            <Button size={"small"} color={"negative"} onClick={onToggle}>
              닫기
            </Button>
            <Button size={"small"} color={"primary"}>
              확인
            </Button>
          </ButtonSection>
        </ModalContainer>
      </ModalWrap>
    </>
  );
}

export function ModalSecond({ onToggle }) {
  return (
    <>
      <ModalWrap onClick={onToggle}>
        <ModalSecondContainer>
          <div>
            닫기 버튼 1개가 있고,
            <br />
            외부 영역을 누르면 모달이 닫혀요.
          </div>
          <CircleButton onClick={onToggle}>X</CircleButton>
        </ModalSecondContainer>
      </ModalWrap>
    </>
  );
}

const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  background-color: rgba(221, 221, 221, 0.8);
`;
const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
`;
const ButtonSection = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

const ModalSecondContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
`;

const CircleButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
`;
