import React from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';

import s from './Login.module.scss';

const Login: React.FC = () => {
  return (
    <>
      <Header>
        <Header.Menu />
      </Header>

      <main className={s.root}>
        <h3>What's your nickname?</h3>
        <Form>
          <Form.Input />
        </Form>
      </main>
    </>
  );
};

export default Login;
