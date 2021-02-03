import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

//for internal development purpose
if (process.env.NODE_ENV === 'development') {
  const devElement = document.querySelector('#marketing-dev-rootx');
  if (devElement) mount(devElement);
}

// for external production purpose
export { mount };
