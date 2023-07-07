import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../Components/Button";

function Input() {
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
          <label>이름</label>
          <InputBox type="text" value={name} onChange={onChangeName} />
        </div>
        <div>
          <label>가격</label>
          <InputBox
            type="text"
            value={price}
            onChange={onChangePrice}
            placeholder="0"
          />
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
const InputBox = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export default Input;
