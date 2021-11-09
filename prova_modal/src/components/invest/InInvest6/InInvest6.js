import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  GreenContainer,
  State,
  Quantity,
  ExportAddress,
  WalletLink,
} from './InInvest6.style';

import { 
  BiExport,
  BiLeftArrowAlt,
  BiRightArrowAlt
} from "react-icons/bi";


const InInvest6 = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>Success!</ModalTitle>

        <GreenContainer>

          <div>
            <State><BiRightArrowAlt /> Sent</State>
            <Quantity>9,999,999 usdt</Quantity>
          </div>

          <div>
            <State><BiLeftArrowAlt /> Received</State>
            <Quantity>9,999,999 tns</Quantity>
          </div>

          <div>
            <ExportAddress><BiExport /> Transaction</ExportAddress>
            <WalletLink>0xD84532F281f947795b943D4417b979134bbc636F</WalletLink>
          </div>

        </GreenContainer>
      </ModalContainer>
    </BlurBg>
  )
}

export default InInvest6
