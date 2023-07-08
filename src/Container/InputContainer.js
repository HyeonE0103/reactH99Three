import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../Components/Button";
import Input from "../Components/Input";

function InputContainer() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePrice = (e) => {
    const numPrice = e.target.value.replace(/\D/g, "");
    setPrice(Number(numPrice).toLocaleString());
  };
  const onClickHandler = () => {
    if (price && name) {
      alert(`{name: ${name} , price: ${price.replace(/,/g, "")}}`);
    } else {
      alert("이름과 가격을 입력해주세요");
    }
  };

  return (
    <>
      <h1>Input</h1>
      <InputWrap>
        <div>
          <Input type="text" value={name} onChange={onChangeName}>
            이름
          </Input>
        </div>
        <div>
          <Input
            type="text"
            value={price}
            onChange={onChangePrice}
            initvalue="0"
          >
            가격
          </Input>
        </div>
        <Button size={"small"} color={"primary"} onClick={onClickHandler}>
          저장
        </Button>
      </InputWrap>
    </>
  );
}

const InputWrap = styled.form`
  display: flex;
  flex-direction: row;
  gap: 30px;
  div {
    vertical-align: middle;
  }
`;
export default InputContainer;
