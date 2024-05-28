import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/App';
import 'src/index.css';
import AppHit from './AppHit';
import AppModel from './AppModel';
import AppAnimation from './AppAnimation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppAnimation />
  </React.StrictMode>,
);
