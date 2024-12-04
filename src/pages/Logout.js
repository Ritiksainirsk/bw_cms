import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/LoginAPI';
import ApiUiController from '../controller/ApiUiController';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate("/login");
    // TODO: Logout API Pending

    // async function logoutApi() {
    //   await logout({},onSucess);
    // }
    // logoutApi();
  }, []);

  // const onSucess = () => {  
  //   localStorage.clear();
  //   navigate("/login");
  // }
  return (<ApiUiController inApiCall={true} />);
}

export default Logout;