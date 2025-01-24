import { Outlet } from "react-router-dom";
import LeftNavBar from "../components/layout/LeftNavBar";

function Home() {
  return (
    <div>
      <LeftNavBar />
      <div className="pl-[260px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
