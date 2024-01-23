import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StatePovider } from './StateProvider';
import reducer,{intialState} from './reducer';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StatePovider intialState={intialState} reducer={reducer}>
    <App/>
  </StatePovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();
