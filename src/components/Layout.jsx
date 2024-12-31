import { Outlet } from "react-router-dom";

//Import components
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
