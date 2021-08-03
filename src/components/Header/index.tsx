import React from 'react';
import HeaderMenu from '@/components/Header/HeaderMenu';
import { GENERAL_MENU } from '@/routes';
// styles
import s from './Header.module.scss';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props): JSX.Element => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <a href={GENERAL_MENU[0].link} className={s.brand}>
          <div className={s.brandLogo} />
        </a>
        {children}
      </div>
    </div>
  );
};

Header.Menu = HeaderMenu;
export default Header;
