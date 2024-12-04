import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../pages/admindashboard/admin/List";
import { checkPermission } from "../util/Util";
import { Const } from "../util/Constants";
import { Admin } from "../util/PermissionIndex";

const AdminRoute = () => {
  const [permission, isPermission] = useState({});
  const role = JSON.parse(localStorage.getItem(Const.LoggedInRolePermission));
  useEffect(() => {

    const check = checkPermission(role.admin, Admin);
    isPermission(check);
  },[]);
  
  return (
    <>
      <Routes>
        {permission?.ViewPage && (
        <Route path="/" element={<List isPermission={isPermission}/>} />
        )}
      </Routes>
    </>
  )
}

export default AdminRoute;