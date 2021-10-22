import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  FullButton,
  ModalSubtitle,
  InputField,
  Captcha
} from "./Login.style";

const Login = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>
          Login
        </ModalTitle>

        <ModalSubtitle>
          Commettee evaluation member
        </ModalSubtitle>

        <InputField type='email' placeholder='email' style={{ marginTop: '56px' }}></InputField>

        <InputField type='password' placeholder='password'></InputField>

        <Captcha>
          <h3>Captcha</h3>
        </Captcha>

        <FullButton>
          Login
        </FullButton>
      </ModalContainer>
    </BlurBg>
  )
}

export default Login
