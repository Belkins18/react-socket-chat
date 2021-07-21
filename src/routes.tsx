import React from 'react';
import Chat from './pages/Chat';
import Login from './pages/Login';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU = [
  {
    title: 'Login',
    link: '/',
    component: () => <Login />,
  },
  {
    title: 'Chat',
    link: '/chat',
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
