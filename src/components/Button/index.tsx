import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

// eslint-disable-next-line no-shadow
export enum BtnBackgrounds {
  Green = '#73D677',
  Yellow = '#F2CB07',
}
interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  background: BtnBackgrounds.Green | BtnBackgrounds.Yellow;
  className?: string;
}

const Button: React.FC<Props> = ({ children, className = null, background, onClick }) => {
  return (
    <button type="button" className={cn(s.root, className)} onClick={onClick} style={{ backgroundColor: background }}>
      {children}
    </button>
  );
};
export default Button;
