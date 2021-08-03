import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '@/routes';

// styles
import s from './HeaderMenu.module.scss';

const Menu = () => {
  const path = usePath();
  console.log('#### path: ', path);

  return (
    <nav className={s.root}>
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
  );
};

export default Menu;
