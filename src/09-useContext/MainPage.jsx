import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { Navbar } from "./Navbar";
export const MainPage = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      <hr />

      <Navbar />

      <Outlet />
    </UserProvider>
  );
};
