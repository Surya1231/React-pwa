import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router , withRouter } from 'react-router-dom';
import './assets/main.css'


const Main = withRouter((props) => <App {...props} />);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
