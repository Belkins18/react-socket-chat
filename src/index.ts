import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';

const $root = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  $root?.classList.add('development-mode');
}

ReactDOM.render(React.createElement(App), $root);
