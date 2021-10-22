import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  ModalDescription,
  ModalComment,
  ModalTextArea,
  FullButton
} from "./AskInfo.style";

const AskInfo = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>
          Ask for info to the Owner
        </ModalTitle>

        <ModalDescription>
          Members of th commitee asked for more info regarding the fundraise:
        </ModalDescription>

        <ModalComment>
          <span>Marcus Rashford:</span>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”
        </ModalComment>

        <ModalComment>
          <span>Marcus Rashford:</span>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”
        </ModalComment>

        <ModalTextArea>
          <p>Ask for info to the Owner</p>
        </ModalTextArea>

        <FullButton>Send</FullButton>
      </ModalContainer>
    </BlurBg>
  )
}

export default AskInfo
