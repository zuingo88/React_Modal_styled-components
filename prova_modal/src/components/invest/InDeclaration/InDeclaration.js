import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalGrey,
  FullButton
} from './InDeclaration.style';

const InDeclaration = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>
          Declaration
        </ModalTitle>

        <ModalGrey />

        <FullButton>Declare</FullButton>
      </ModalContainer>
    </BlurBg>
  )
}

export default InDeclaration
