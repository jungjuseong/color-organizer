import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/side-menu';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SideMenu/>, document.getElementById('container'));

registerServiceWorker();
