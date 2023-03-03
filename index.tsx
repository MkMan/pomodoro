import './src/css/reset.css';
import './src/css/fonts.css';

import { render } from 'solid-js/web';
import { App } from 'src/app/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- defined in index.html
render(() => <App />, document.getElementById('root')!);
