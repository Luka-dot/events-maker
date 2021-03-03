import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import { Provider } from 'react-redux';
import { Store } from './app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={Store} >
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>, 
    rootEl)
};

if (module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render)
  })
};

render();

