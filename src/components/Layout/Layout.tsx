import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='custom-scrollbar'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
