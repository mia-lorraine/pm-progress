import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './pages/App';
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
