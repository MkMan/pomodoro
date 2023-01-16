import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- defined in index.html
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
