import React from "react";
import { styled } from "styled-components";

const Input = ({ children, type, value, onChange, initvalue }) => {
  return (
    <>
      <label>{children}</label>
      <InputStyle
        type={type}
        value={value}
        onChange={onChange}
        placeholder={initvalue}
      />
    </>
  );
};
const InputStyle = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
export default Input;
