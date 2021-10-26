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
  width: 1046px;
  margin: 0;
  margin-top: 24px;
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: #30B8AE;
`

export const ModalDescription = styled.p`
  width: 100%;
  margin-top: 53px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;

  color: #3D3D3D;
`

export const ModalComment = styled.p`
  margin-top: 24px;
  padding: 10px;
  font-style: normal; 
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  
  color: #3D3D3D;

  border: 1px solid #CACACA;
  box-sizing: border-box;
  border-radius: 8px;
  
  & span {
    font-weight: 600;
  }
`

export const ModalTextArea = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 54px;

  background: #FBFBFB;
  border: 1px solid #CACACA;
  box-sizing: border-box;
  border-radius: 8px;

  & p {
    margin-top: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    color: #B3BAC0;
  }
`

export const FullButton = styled.button`
  width: 140px;
  height: 40px;
  margin: 32px 0 40px 0;

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