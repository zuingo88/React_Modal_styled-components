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
  margin: 0;
  width: 1046px;
  height: 432px;
  margin-top: 220px;

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
  margin: 0;
  margin-top: 24px;
  width: 1046px;
  text-align: center;

  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: #30B8AE;
`

export const WarningMessage = styled.div`
  margin-top: 32px;

  & p {
    margin: 0;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: black;
  }

  & p:first-of-type {
    text-transform: uppercase;
    color: #E03737;
  }
`

export const ChooseMessage = styled.div`
  margin-top: 48px;

  & p {
    margin: 0;
    font-size: 18px;
    line-height: 25px;
    text-align: center;

    color: #3D3D3D;
  }

  & h2 {
    margin: 0;
    margin-top: 24px;
    width: 1046px;
    text-align: center;

    font-weight: bold;
    font-size: 32px;
    line-height: 44px;

    color: #09da60;
  }
`

export const ButtonsContainer = styled.div`
  margin: 0;
  padding: 40px;
`

export const EmptyButton = styled.button`
  width: 140px;
  height: 40px;
  margin-right: 64px;

  background: #F7FDFE;
  border: 2px solid #2EC6BA;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(46, 198, 186, 0.25);
  border-radius: 2px;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #2EC6BA;
`

export const FullButton = styled.button`
  width: 140px;
  height: 40px;

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