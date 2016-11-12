import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'whatwg-fetch'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ugly hack to reload on focus
window.onblur = () =>  {
  window.onfocus = () => {
    location.reload(true)
  };
};
