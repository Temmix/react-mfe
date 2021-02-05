import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardModule';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
