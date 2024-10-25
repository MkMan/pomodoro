import { render } from 'solid-js/web';
import { App } from 'src/app/app';

import './src/css/dimensions.css';
import './src/css/fonts.css';
import './src/css/reset.css';

// biome-ignore lint/style/noNonNullAssertion: define in html
render(() => <App />, document.getElementById('root')!);
