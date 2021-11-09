import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  GreenContainer,
  ExportAddress,
  WalletLink,
  EmptyButton,
} from './InInvest2.style';

import { BiExport } from "react-icons/bi";

const InInvest2 = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>Wallet</ModalTitle>

        <GreenContainer>
          <ExportAddress><BiExport /> Address</ExportAddress>

          <WalletLink>0x5a0b54d581f947795b943D4417b979134bdcdc38</WalletLink>
          
        </GreenContainer>

        <EmptyButton>Disconnect</EmptyButton>
      </ModalContainer>
    </BlurBg>
  )
}

export default InInvest2
