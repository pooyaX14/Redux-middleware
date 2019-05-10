import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/components/App';
import * as serviceWorker from './serviceWorker';
import index from "./js/index";
import store from "./js/store/index";
import { Provider } from 'react-redux';


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  )
serviceWorker.unregister();
