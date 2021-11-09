import React from 'react';
import {
  BlurBg,
  ModalContainer,
  CloseModal,
  ModalTitle,
  RedContainer,
  Description,
  ExportAddress,
  WalletLink,
} from './InInvest7.style';

import {
  BiExport,
} from "react-icons/bi";


const InInvest7 = () => {
  return (
    <BlurBg>
      <ModalContainer>
        <CloseModal />

        <ModalTitle>Error</ModalTitle>

        <RedContainer>
          <Description>
            Sent Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </Description>

          <div>
            <ExportAddress><BiExport /> Transaction</ExportAddress>
            <WalletLink>0x5a0b54d581f947795b943D4417b979134bdcdc38</WalletLink>
          </div>

        </RedContainer>
      </ModalContainer>
    </BlurBg>
  )
}

export default InInvest7
