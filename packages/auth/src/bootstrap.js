import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (
  element,
  { onSignIn, onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  // history listens if the navigation changes,
  // then call the callback onNavigate from Container to update the main url
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, element);

  return {
    onParentNavigate(location) {
      if (location.pathname !== history.location.pathname) {
        history.push(location.pathname);
      }
    },
  };
};

//for internal development purpose
if (process.env.NODE_ENV === 'development') {
  const devElement = document.querySelector('#auth-dev-rootx');
  if (devElement) mount(devElement, { defaultHistory: createBrowserHistory() });
}

// for external production purpose
export { mount };
