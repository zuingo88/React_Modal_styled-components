import styled from "styled-components"

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
  width: 472px;
  height: 216px;
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
  /* width: 1046px;
  margin: 0;
  margin-top: 24px;
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: #30B8AE; */

  margin-top: 16px;
  /* font-family: Nunito; */
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;

  color: #30B8AE;

  align-self: flex-start;
`

export const GreenContainer = styled.div`
  margin-top: 8px;
  padding: 16px 22px;
  width: 440px;
  height: 87px;

  background: #F7FEFB;
  border: 1px solid #B5FFDF;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between; 
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

export const WalletLink =  styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  text-align: center;
  text-decoration-line: underline;

  color: #30B8AE;
`

export const EmptyButton = styled.button`
  margin-top: 16px;
  width: 140px;
  height: 40px;
  /* margin-rightEmptyButton: 64px; */

  background: #F7FDFE;
  border: 2px solid #2EC6BA;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(46, 198, 186, 0.25);
  border-radius: 2px;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #E03737;
`