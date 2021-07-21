import React from 'react';
// import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
// import Button, { BtnBackgrounds } from '@/components/Button';

const NotFound = () => {
  return (
    <main className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <button type="button">Return</button>
        {/* <Button classNames={s.button} onClick={() => navigate('/')} background={BtnBackgrounds.Yellow}>
            Return
          </Button> */}
      </div>
    </main>
  );
};

export default NotFound;
