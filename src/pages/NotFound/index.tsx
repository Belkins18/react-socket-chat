import React from 'react';
import { navigate } from 'hookrouter';
import Button, { BtnBackgrounds } from '@/components/Button';
import { LinkEnum } from '@/routes';

import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <Button onClick={() => navigate(LinkEnum.LOGIN)} className={s.button} background={BtnBackgrounds.Yellow}>
          Return
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
