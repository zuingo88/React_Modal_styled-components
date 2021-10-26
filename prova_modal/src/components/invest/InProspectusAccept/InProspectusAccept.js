import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalGrey,
  ButtonsContainer,
  EmptyButton,
  FullButton
} from './InProspectusAccept.style';

const InDeclaration = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>
          Prospectus
        </ModalTitle>

        <ModalGrey />

        <ButtonsContainer>
          <EmptyButton>Download</EmptyButton>

          <FullButton>Accept</FullButton>
        </ButtonsContainer>
      </ModalContainer>
    </BlurBg>
  )
}

export default InDeclaration