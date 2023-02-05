import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
const Root = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl p-4 mx-auto min-h-[73.8vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
