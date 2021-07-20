import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';

const App = () => {
  console.log('###: App');

  return <div className={cn(s.header)}>Thois is App Component!</div>;
};

export default App;
