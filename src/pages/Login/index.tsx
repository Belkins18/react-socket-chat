import React from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Input from '@/components/Form/Input';

import s from './Login.module.scss';

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <main className={s.root}>
        <h3>What's your nickname?</h3>
        <Form>
          <Input />
        </Form>
      </main>
    </>
  );
};

export default Login;
