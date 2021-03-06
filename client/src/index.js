import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import store from "./JS/store/store";
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
