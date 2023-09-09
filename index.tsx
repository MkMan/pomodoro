import { render } from 'solid-js/web';
import { App } from 'src/app/app';

import './src/css/colors.css';
import './src/css/dimensions.css';
import './src/css/fonts.css';
import './src/css/reset.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- defined in index.html
render(() => <App />, document.getElementById('root')!);
