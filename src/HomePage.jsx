import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Admin from "./Admin";
import Roles from "./Roles";
import SearchBox from "./components/SearchBox";
import ReactangleTop from "./components/ReactangleTop";

const HomePage = () => {
  return (
    <main className="bg-[#FFF] w-screen  h-screen ">
      <Sidebar />
      <ReactangleTop Page="Admin Management" />
      <SearchBox />

      <div className=" flex flex-col w-[80vw] h-full flex-wrap  items-center justify-center  ">
        <Outlet />
        <Admin />
        <Roles />
      </div>
    </main>
  );
};

export default HomePage;
