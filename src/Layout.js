// Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
