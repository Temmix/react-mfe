import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
};

//for internal development purpose
if (process.env.NODE_ENV === 'development') {
  const devElement = document.querySelector('#dashboard-dev-rootx');
  if (devElement) mount(devElement);
}

// for external production purpose
export { mount };
