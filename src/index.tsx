import './index.css';

import { MantineProvider, Title } from '@mantine/core';
import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- defined in index.html
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Title>Pomodoro</Title>
    </MantineProvider>
  </React.StrictMode>
);
