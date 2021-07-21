import React, { ChangeEvent, useState } from 'react';
import s from './Input.module.scss';

const Input = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
  };

  return <input type="text" className={s.root} onChange={handleChange} value={value} />;
};

export default Input;
