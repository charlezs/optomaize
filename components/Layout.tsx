import React from "react";

type Child = {
  children: any;
};

function Layout({ children }: Child) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
