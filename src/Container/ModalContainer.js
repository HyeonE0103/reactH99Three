import React, { useState } from "react";
import { LargeModalInside, SmallModalInside } from "../Components/Modal";
import { styled } from "styled-components";
import Button from "../Components/Button";
import { icons } from "../assets/icons";

const ModalContainer = () => {
  const [openSmallModal, setOpenSmallModal] = useState(false);
  const [openLgModal, setOpenLgModal] = useState(false);

  const onToggleSmallModal = () => {
    setOpenSmallModal(!openSmallModal);
  };
  const onToggleLgModal = () => {
    setOpenLgModal(!openLgModal);
  };
  return (
    <>
      <h1>Modal</h1>
      <ModalSection>
        <Button
          size="small"
          color="primary"
          onClick={onToggleSmallModal}
          icon={icons.go}
        >
          open modal
        </Button>
        <Button size="large" color="negative" onClick={onToggleLgModal}>
          open modal
        </Button>
      </ModalSection>
      <ModalWrapper>
        {openSmallModal && (
          <>
            <div className="full"></div>
            <SmallModalInside
              text="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요."
              onToggle={onToggleSmallModal}
            />
          </>
        )}
        {openLgModal && (
          <>
            <div className="full" onClick={onToggleLgModal}></div>
            <LargeModalInside
              text1="닫기 버튼 1개가 있고,"
              text2="외부 영역을 누르면 모달이 닫혀요."
              onToggle={onToggleLgModal}
            />
          </>
        )}
      </ModalWrapper>
    </>
  );
};

export default ModalContainer;

const ModalSection = styled.div`
  display: flex;
  gap: 10px;
`;
const ModalWrapper = styled.div`
  .full {
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: fixed;
    background-color: rgba(225, 225, 225, 0.531);
  }
`;
