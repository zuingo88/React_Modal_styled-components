import styled from "styled-components";

export const BlurBg = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalContainer = styled.div`
  position: relative;
  width: 1046px;
  height: 752px;
  margin: 0;
  margin-top: 220px;
  padding: 0 24px;

  background: #FFFFFF;
  border: 1px solid #2EC6BA;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 4px rgba(46, 198, 186, 0.25);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseModal = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:before, 
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;
  }
`

export const ModalTitle = styled.h2`
  width: 1046px;
  margin: 0;
  margin-top: 24px;
  text-align: center;

  font-weight: bold;
  font-size: 45px;
  line-height: 44px;

  color: #30B8AE;
`

export const ModalSubtitle = styled.h3`
  margin: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  text-transform: capitalize;

  color: #30B8AE;
`

export const InputField = styled.input`
  width: 325px;
  height: 48px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #FBFBFB;
  border: 1px solid #CACACA;
  box-sizing: border-box;
  border-radius: 8px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  text-align: center;

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: #B3BAC0;
  }

  &:focus {
    outline: none;
  }
`

export const Captcha = styled.div`
  width: 325px;
  height: 81px;
  margin-top: 24px;
  left: 557px;
  top: 519px;

  background: rgba(196, 196, 196, 0.5);


  display: flex;
  align-items: center;
  justify-content: center;

  & h3 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;

    color: #2EC6BA;
  }
`

export const FullButton = styled.button`
  width: 140px;
  height: 40px;
  margin: 64px 0 38px 0;

  background: #2EC6BA;
  border: 2px solid #2EC6BA;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(46, 198, 186, 0.25);
  border-radius: 2px;
  
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
`