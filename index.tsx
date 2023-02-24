import './index.css';

import { render } from 'solid-js/web';
import { App } from 'src/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- defined in index.html
render(() => <App />, document.getElementById('root')!);
