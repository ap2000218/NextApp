
import React from "react";

import SideBar from "@/ui/dashboard/sidebar/sidebar"
import Navbar from "@/ui/dashboard/navbar/navbar"

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
