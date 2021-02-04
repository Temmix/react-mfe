import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthModule';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        if (history.pathname !== location.pathname)
          history.push(location.pathname);
      },
      // this is the callback for the container
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
