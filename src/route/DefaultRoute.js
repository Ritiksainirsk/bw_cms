import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ApiUiController from "../controller/ApiUiController";
import PageManagement from "./PageManagement";
import DashboardRoute from "./DashboardRoute";
import UnAuthPage from "../pages/UnAuthPage";


const DefaultRoute = ({open, handleToggleMenu}) => {
  const [inApiCall, setApiCall] = useState(false);
  return (
    <>
      <ApiUiController inApiCall={inApiCall}>
          <Routes>
            /* Admin Dashboard Journey */
            <Route path="/dashboard/*" element={<DashboardRoute open={open} handleToggleMenu={handleToggleMenu}/>} />
            /* Unauthorized Page */
            <Route path="/401" element={<UnAuthPage />} />

            /* User Frondend Journey */
            <Route path="*" element={<PageManagement />} />
            /* Error Page */
            // error page 404,500.
          </Routes>
      </ApiUiController>
    </>
  )
}

export default DefaultRoute;