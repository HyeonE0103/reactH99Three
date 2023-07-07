import React, { useState } from "react";
import { styled } from "styled-components";
import Select from "../Components/Select";

function Selectes() {
  const list = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [select, setSelect] = useState({ id: 0, text: "리액트", show: false });
  const [selectTwo, setSelectTwo] = useState({
    id: 1,
    text: "리액트",
    show: false,
  });

  const handleToggle = (target) => {
    target.id === 0
      ? setSelect({ ...target, show: !target.show })
      : setSelectTwo({ ...target, show: !target.show });
  };
  const handleClick = (target, item) => {
    target.id === 0
      ? setSelect({ ...target, text: item, show: !target.show })
      : setSelectTwo({ ...target, text: item, show: !target.show });
  };
  return (
    <SelectWrap>
      <h1>Select</h1>
      <SelectSection>
        <Select
          list={list}
          select={select}
          onToggle={handleToggle}
          onClick={handleClick}
        />
        <div className="hidden">
          <Select
            list={list}
            select={selectTwo}
            onToggle={handleToggle}
            onClick={handleClick}
          />
        </div>
      </SelectSection>
    </SelectWrap>
  );
}
const SelectWrap = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
const SelectSection = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
  gap: 10px;
  .hidden {
    height: 100%;
    overflow: hidden;
  }
`;
export default Selectes;
