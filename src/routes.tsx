import React from 'react';
import { withSuspence } from '@/hoc/withSuspence';

const Chat = React.lazy(() => import('./pages/Chat'));
const Login = React.lazy(() => import('./pages/Login'));

const SuspendedChat = withSuspence(Chat);
const SuspendedLogin = withSuspence(Login);

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
    component: () => <SuspendedLogin />,
  },
  {
    title: 'Chat',
    link: LinkEnum.CHAT,
    component: () => <SuspendedChat />,
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
