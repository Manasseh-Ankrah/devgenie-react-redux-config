import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <header>
        <nav className="navbar">
          <p>
            My Awesome NAVBAR, That will show the side navigation is the user is
            logged in{" "}
          </p>

          {user && <p>User is logged in show the side nav</p>}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
