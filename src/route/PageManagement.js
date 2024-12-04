import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../pages/admindashboard/pagemanagement/List";
import ApiUiController from "../controller/ApiUiController";
import { checkPermission } from "../util/Util";
import { PageManagement } from "../util/PermissionIndex";
import { Const } from "../util/Constants";


const PageManagementRoute = ({}) => {
  const [permission, isPermission] = useState({});
  const [inApiCall, setApiCall] = useState(false);
  const role = JSON.parse(localStorage.getItem(Const.LoggedInRolePermission));
  useEffect(() => {
    const check = checkPermission(role.pagemanagement, PageManagement);
    isPermission(check);
  },[]);

  return (
    <>
      <ApiUiController inApiCall={inApiCall}>
          <Routes>
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