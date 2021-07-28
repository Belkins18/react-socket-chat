import React from 'react';
import Chat from './pages/Chat';
import Login from './pages/Login';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

// eslint-disable-next-line no-shadow
export enum LinkEnum {
  LOGIN = '/',
  CHAT = '/chat',
}

export const GENERAL_MENU = [
  {
    title: 'Login',
    link: LinkEnum.LOGIN,
    component: () => <Login />,
  },
  {
    title: 'Chat',
    link: LinkEnum.CHAT,
    component: () => <Chat />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
