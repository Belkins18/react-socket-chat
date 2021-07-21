import React from 'react';
// styles
import s from './Header.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}
const MENU: Array<IMenu> = [
  {
    id: 1,
    value: 'Login',
    link: '/',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <a href={MENU[0].link} className={s.brand}>
          <div className={s.brandLogo} />
        </a>
        <nav className={s.menuWrap}>
          {MENU.map(({ link, value, id }) => (
            <a key={id} href={link} className={s.menuLink}>
              {value}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
