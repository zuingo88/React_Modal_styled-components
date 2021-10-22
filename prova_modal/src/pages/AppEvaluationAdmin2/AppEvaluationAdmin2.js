import React from "react";
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  WarningMessage,
  ChooseMessage,
  ButtonsContainer,
  EmptyButton,
  FullButton
} from "./AppEvaluationAdmin2.style";

const Evaluate = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>
          Evaluate application
        </ModalTitle>

        <WarningMessage>
          <p>Beware</p>
          <p>Once you evaluate a fundraise you cannot change your decision</p>
        </WarningMessage>

        <ChooseMessage>
          <p>You have selected:</p>
          <h2>Feasible</h2>
        </ChooseMessage>

        <ButtonsContainer >
          <EmptyButton>Back</EmptyButton>

          <FullButton>Confirm</FullButton>
        </ButtonsContainer>
      </ModalContainer>
    </BlurBg>
  )
}

export default Evaluate
