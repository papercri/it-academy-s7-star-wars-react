import { Outlet } from "react-router-dom";
import Header from "./header/Header";


const AppLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
};

export default AppLayout;
