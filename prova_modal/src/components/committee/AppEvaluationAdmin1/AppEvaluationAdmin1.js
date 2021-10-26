import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalExplanation,
  ButtonsContainer,
  EmptyRedButton,
  FullButton,
} from "./AppEvaluationAdmin1.style";

const AppEvaluationAdmin1 = () => {
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
            <span style={{ textTransform: 'uppercase' }}>Note</span>
            : if you do not think the fundraise has quality and trustworthiness and so it should not go live;
          </p>
        </ModalExplanation>

        <ButtonsContainer>
          <EmptyRedButton>Refuse</EmptyRedButton>

          <FullButton>Feasible</FullButton>
        </ButtonsContainer>

      </ModalContainer>
    </BlurBg>
  )
};

export default AppEvaluationAdmin1
