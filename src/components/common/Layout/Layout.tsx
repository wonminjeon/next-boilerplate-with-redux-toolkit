import React from "react";

const Layout = ({ children }) => (
  <div>
    <header className="text-white underline">This header is in "Layout Component"</header>
    {children}
  </div>
);

export default Layout;
