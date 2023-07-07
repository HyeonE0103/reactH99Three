import React, { useState } from "react";
import Button from "../Components/Button";
import { styled } from "styled-components";
import { Modal, ModalSecond } from "../Components/Modal";

function Modals() {
  const [modal, setModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const handleModalToggle = () => {
    setModal(!modal);
  };
  const handleModalSecondToggle = () => {
    setSecondModal(!secondModal);
  };
  return (
    <>
      <h1>Modal</h1>
      <ModalButtonSection>
        <div>
          <Button size={"small"} color={"primary"} onClick={handleModalToggle}>
            open modal
          </Button>
        </div>
        {modal && <Modal onToggle={handleModalToggle} />}
        <div>
          <Button
            size={"large"}
            color={"negative"}
            onClick={handleModalSecondToggle}
          >
            open modal
          </Button>
        </div>
        {secondModal && <ModalSecond onToggle={handleModalSecondToggle} />}
      </ModalButtonSection>
    </>
  );
}
const ModalButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default Modals;
