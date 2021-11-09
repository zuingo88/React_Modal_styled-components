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
  width: 800px;
  height: 460px;
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
  right: 34px;
  top: 26px;
  width: 20px;
  height: 20px;
  opacity: 0.3;

  cursor: pointer;

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
  margin-top: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: #30B8AE;

  align-self: center;
`

export const GreenContainer = styled.div`
  margin-top: 32px;
  padding: 24px 50px;
  width: 600px;
  height: 320px;

  background: #F7FEFB;
  border: 1px solid #B5FFDF;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const State = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  text-align: center;

  color: #3D3D3D;

  display: flex;
  align-items: center;
`

export const Quantity = styled.p`
  margin-top: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;

  text-align: center;
  text-transform: uppercase;

  color: #3D3D3D;
`

export const ExportAddress = styled.p`
  /* margin-top: 16px; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  text-align: start;

  color: #3D3D3D;
`

export const WalletLink = styled.a`
  margin-top: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  text-align: center;
  text-decoration-line: underline;

  color: #30B8AE;

  display: flex;
  align-items: center;
`