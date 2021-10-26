import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalDescription,
  ModalUpload,
  ModalExplanation,
  ButtonsContainer,
  EmptyRedButton,
  FullButton,
  ModalComment,
} from "./AppEvaluation3.style";

const AppEvaluation3 = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>Evaluate application after my question</ModalTitle>

        <ModalDescription style={{ marginTop: '24px' }}>Your question:</ModalDescription>
      <ModalComment>
        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit?”
      </ModalComment>

      <ModalDescription>Question sent from the Supervisor to the Owner:</ModalDescription>
      <ModalComment>
        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit?”
      </ModalComment>

      <ModalDescription style={{ color: '#30B8AE' }} >Owner reply:</ModalDescription>
      <ModalComment>
        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit?”
      </ModalComment>

      <ModalUpload>Owner reply</ModalUpload>

      <ModalExplanation>
        <p>
          <span style={{ color: '#09da60' }}>Accept</span>
          : if you think the fundraise has good quality and it is trustworthy and should go live;
        </p>

        <p>
          <span style={{ color: '#E03737' }}>Reject</span>
          : if you do not think the fundraise has quality and trustworthiness and so it should not go live;
        </p>

        <p>
          <span style={{ textTransform: 'uppercase' }}>Note</span>
          : once you evaluate a fundraise you cannot change your decision
        </p>
      </ModalExplanation>

      <ButtonsContainer>
        <EmptyRedButton>Reject</EmptyRedButton>

        <FullButton>Accept</FullButton>
      </ButtonsContainer>

    </ModalContainer>
    </BlurBg >
  )
}

export default AppEvaluation3
