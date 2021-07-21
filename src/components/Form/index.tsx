import React, { FormEvent } from 'react';
import Input from './Input';

interface Props {
  children: React.ReactNode;
}

const Form = ({ children }: Props): JSX.Element => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(((event.target as HTMLFormElement).firstChild as HTMLInputElement).value);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

Form.Input = Input;

export default Form;
