import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>

      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Header />
          <Outlet />
        </div>
      </main>

      {/* <div className="p-10 text-center bg-gray-800 mt-10">Made with tare</div> */}
    </div>
  );
};

export default AppLayout;
