import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../pages/admindashboard/template/List";
import ApiUiController from "../controller/ApiUiController";
import { checkPermission } from "../util/Util";
import { Template } from "../util/PermissionIndex";
import { Const } from "../util/Constants";
import EditContent from "../pages/admindashboard/template/EditContent";


const PageManagementRoute = ({}) => {
  const [permission, isPermission] = useState({});
  const [inApiCall, setApiCall] = useState(false);
  const role = JSON.parse(localStorage.getItem(Const.LoggedInRolePermission));
  
  useEffect(() => {
    const check = checkPermission(role.pagemanagement, Template);
    isPermission(check);
  },[]);

  return (
    <>
      <ApiUiController inApiCall={inApiCall}>
          <Routes>
          {permission?.Edit && (
            <Route path="/edit/:reg_sef" element={<EditContent isPermission={permission}/>} />
            )}
            /* User Frondend Journey */
            {permission?.ViewPage && (
            <Route path="/" element={<List isPermission={permission}/>} />
            )}
          </Routes>
      </ApiUiController>
    </>
  )
}

export default PageManagementRoute;