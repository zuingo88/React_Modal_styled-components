import React from 'react'
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalExplanation,
  ModalTextArea,
  ButtonsContainer,
  EmptyButton,
  FullButton,
} from "./AppEvaluation2.style";

const AppEvaluation2 = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />
        
        <ModalTitle>Ask for info</ModalTitle>

        <ModalExplanation>
          <p>Here you can ask for more info to the fundraise Owner, <span>text to do</span></p>
        </ModalExplanation>

        <ModalTextArea>
          <p>Ask for info to the Owner</p>
        </ModalTextArea>

        <ButtonsContainer>
          <EmptyButton>Back</EmptyButton>

          <FullButton>Confirm</FullButton>
        </ButtonsContainer>
      </ModalContainer>
    </BlurBg>
  )
}

export default AppEvaluation2
