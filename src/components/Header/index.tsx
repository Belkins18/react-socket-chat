import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';

import { GENERAL_MENU } from '@/routes';
// styles
import s from './Header.module.scss';

const Header = () => {
  const path = usePath();
  console.log('#### path: ', path);

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <a href={GENERAL_MENU[0].link} className={s.brand}>
          <div className={s.brandLogo} />
        </a>
        <nav className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
