import React from 'react';
import AccountHeader from './account-header/account-header';
import { AccountBody } from './account-body/account-body';

import './account.scss';

export const Account = () => {

  return (
    <>
      <AccountHeader />
      <AccountBody />
    </>
  )
};
