import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './pages/App';
import registerServiceWorker from './scripts/registerServiceWorker';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
