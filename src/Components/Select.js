import { styled } from "styled-components";
import { icons } from "../assets/icons";

function Select({ list, select, onToggle, onClick }) {
  return (
    <div>
      <SelectButton onClick={() => onToggle(select)}>
        <div>{select.text}</div>
        <div>{icons.select()}</div>
      </SelectButton>
      {select.show && (
        <SelectUI>
          {list.map((item, index) => (
            <SelectList key={index} onClick={() => onClick(select, item)}>
              {item}
            </SelectList>
          ))}
        </SelectUI>
      )}
    </div>
  );
}
const SelectButton = styled.button`
  width: 245px;
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 6px;
  cursor: pointer;
`;
const SelectUI = styled.div`
  width: 245px;
  height: 40px;
`;
const SelectList = styled.li`
  height: 40px;
  display: flex;
  padding-left: 15px;
  align-items: center;
  background-color: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
  &:first-child {
    border-top: 1px solid lightgrey;
    border-radius: 5px 5px 0px 0px;
  }
  &:last-child {
    border-bottom: 1px solid lightgrey;
    border-radius: 0px 0px 5px 5px;
  }
`;
export default Select;
