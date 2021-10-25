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
  height: 807px;
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
  flex-grow: 0;
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

export const ModalDescription = styled.p`
  /* all: unset; */
  width: 100%;
  margin-top: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  color: #3D3D3D;
`

export const ModalComment = styled.p`
  margin-top: 8px;
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

export const ModalUpload = styled.div`
width: 265px;
height: 66px;
margin-top: 40px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 4px rgba(46, 198, 186, 0.25);
border-radius: 8px;

display: flex;
justify-content: center;
align-items: center;

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 25px;
text-align: center;

color: #3D3D3D;
`

export const ModalExplanation = styled.div`
  width: 998px;
  height: 125px;
  margin: 80px 24px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & p,
  & span {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;

    color: #3D3D3D;
  }

  & span {
    font-weight: 700;
  }
`

export const ButtonsContainer = styled.div`
  margin: 0;
  margin: 56px 0 37px 0;
`

export const EmptyRedButton = styled.button`
  width: 140px;
  height: 40px;
  margin-right: 64px;

  background: #FFE9E9;
  border: 2px solid #E03737;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(46, 198, 186, 0.25);
  border-radius: 2px;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #E03737;;
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