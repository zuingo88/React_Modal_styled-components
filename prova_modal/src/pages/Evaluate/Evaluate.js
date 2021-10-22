import React from "react";
import {
  BlurBg,
  ModalContainer,
  ModalTitle,
  WarningMessage,
  ChooseMessage,
  ButtonsContainer,
  BackButton,
  ConfirmButton
} from "./Evaluate.style";

const Evaluate = () => {
  return (
    <BlurBg>

      <ModalContainer>
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

        <ButtonsContainer>
          <BackButton>
            Back
          </BackButton>
          <ConfirmButton>
            Confirm
          </ConfirmButton>
        </ButtonsContainer>
      </ModalContainer>
    </BlurBg>
  )
}

export default Evaluate
