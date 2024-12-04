import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ApiUiController from "../controller/ApiUiController";
/* CMs Admin Journey */
import AdminRoute from "./AdminRoute";
import PageManagement from "./PageManagement";
import Template from "./Template";
import Gallery from "./Gallery";
import Blog from "./Blog";

// import PermissionRoute from "./PermissionRoute";
// import RoleRoute from "./RoleRoute";

import Header from "../components/admindashboard/common/Header";
import SideBar from "../components/admindashboard/common/Sidebar";

import AdminProtectedRoute from "../controller/AdminProtectedRoute";

const DefaultRoute = ({open, handleToggleMenu}) => {
  const [inApiCall, setApiCall] = useState(false);
  return (
    <>
      <AdminProtectedRoute>
        <ApiUiController inApiCall={inApiCall}>
          <Header open={open}/>
          <SideBar open={open} handleToggleMenu={handleToggleMenu} />
          <div className={open ? "main-body body-margin" : "main-body"}>
            <Routes>
              /* CMs Admin Journey */
              <Route path="/admin/*" element={<AdminRoute />} />

              <Route path="/pagemanagement/*" element={<PageManagement />} />
              <Route path="/template/*" element={<Template />} />
              {/* <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} /> */}
              
              /* CMs Main Role & permission Journey */
              {/* <Route path="/permission" element={<PermissionRoute />} />
              <Route path="/role/*" element={<RoleRoute />} /> */}
            </Routes>
          </div>
        </ApiUiController>
      </AdminProtectedRoute>
    </>
  )
}

export default DefaultRoute;