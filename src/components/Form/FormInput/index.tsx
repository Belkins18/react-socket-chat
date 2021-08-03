import React, { ChangeEvent, useState } from 'react';
import s from './FormInput.module.scss';

const FormInput: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
  };

  return (
    <input
      type='text'
      className={s.root}
      onChange={handleChange}
      value={value}
    />
  );
};

export default FormInput;
