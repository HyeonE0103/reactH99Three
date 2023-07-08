import React from "react";
import Button from "../Components/Button";
import { css, styled } from "styled-components";

export const SmallModalInside = ({ text, onToggle }) => {
  return (
    <ModalInsideStyle btn="twoButton">
      <p>{text}</p>
      <div className="btns">
        <Button size="small" color="negative" onClick={onToggle}>
          닫기
        </Button>
        <Button size="small" color="primary">
          확인
        </Button>
      </div>
    </ModalInsideStyle>
  );
};

export const LargeModalInside = ({ text1, text2, onToggle }) => {
  return (
    <ModalInsideStyle btn="oneButton">
      <p>{text1}</p>
      <p>{text2}</p>
      <button onClick={onToggle}>X</button>
    </ModalInsideStyle>
  );
};

const ModalInsideStyle = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 23px;
  border-radius: 15px;
  box-sizing: border-box;

  ${(props) =>
    props.btn === "oneButton" &&
    css`
      width: 320px;
      height: 200px;

      button {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid lightgray;
        position: absolute;
        top: 7%;
        right: 4%;
        cursor: pointer;
        &:active {
          filter: brightness(70%);
        }
      }
    `}

  p {
    font-size: 1rem;
    margin: 0;
  }

  .btns {
    position: absolute;
    top: 80%;
    right: 2%;
    display: flex;
    gap: 10px;
  }
`;
