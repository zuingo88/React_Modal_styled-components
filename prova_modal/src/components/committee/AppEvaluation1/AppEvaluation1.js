import React from 'react'
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalExplanation,
  ButtonsContainer,
  EmptyRedButton,
  EmptyButton,
  FullButton,
} from "./AppEvaluation1.style";

const AppEvaluation1 = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>Evaluate application</ModalTitle>

        <ModalExplanation>
          <p>Here you will be able to vote on fundraises:</p>

          <p>
            <span style={{ color: '#09da60' }}>Feasible</span>
            : if you think the fundraise has good quality and it is trustworthy and should go live;
          </p>

          <p>
            <span style={{ color: '#FF7121' }}>Refuse</span>
            : if you do not think the fundraise has quality and trustworthiness and so it should not go live;
          </p>

          <p>
            <span>Ask for info</span>
            : if you feel like there is something missing something and want to ask for more info by sending a message to the campaign creator.
          </p>

          <p>
            <span style={{ textTransform: 'uppercase' }}>Note</span>
            : once you evaluate a fundraise you cannot change your decision
          </p>
        </ModalExplanation>

        <ButtonsContainer>
          <EmptyRedButton>Reject</EmptyRedButton>

          <EmptyButton>Ask for info</EmptyButton>

          <FullButton>Accept</FullButton>
        </ButtonsContainer>

      </ModalContainer>
    </BlurBg>
  )
}

export default AppEvaluation1
