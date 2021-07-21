import React from 'react';
import Chat from './pages/Chat';
import Login from './pages/Login';

const routes = {
  '/': () => <Login />,
  '/chat': () => <Chat />,
};

export default routes;
