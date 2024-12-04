import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { getPageData } from "../pathto/API";
import * as ComponentLibrary from '.';

export default function PageManagement() {

  const [inputData, setInputData] = useState({});
  const [components, setComponent] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [template, setTemplate] = useState({});
  const [inApiCall, setInApiCall] = useState(true);

  const router = useLocation();
  // get page-id = 1 => DMIT , DMIT-Delhi
  const reg_sef = router.pathname.split("/")[3];

  // useeffect get page-data to edit via api using page-id , payload - admin,page-id, validation-token
  useEffect(() => {
    let payload = { reg_sef: reg_sef };
    async function get() {
      await getPageData(payload, onSuccess);
    }
    get();
  }, []);
  /* Api Call Status */
  const apiCallStatus = () => {
    setInApiCall(false);
  };

  const onSuccess = async (res) => {
    const response = await res;
    setInputData(response?.pageData);
    setTemplate(response?.template);  
    setMetaData(response?.metaData);  
    setComponent(response?.components);
    apiCallStatus();
  };
  // set page-data into a state InputData
  // set template/structure used , components used , meta data
  
  const inputHandler = ({name, value, type, component }) => {
    if(type=="text"){
      setInputData({...inputData,[component] : {...inputData[component], [name] : value }});
    } 
      /*        
      if type is file -> send file to s3 and then save the s3 link to inputData "https:s3.aws.com/image-file.png"
      if(type=="file"){
      // s3 code
          const objectLInk = sendFileToS3(FORM_INPUT_FILE);
          setInputData({..., [component] : {...inputData[component], [name] : objectLInk }});
      } 
      */
    }
  // Dynamically create component elements
  const renderComponents = () => {
    return components.map((componentName, index) => {
      const Component = ComponentLibrary[componentName];
      if (Component) {
        return <Component key={index} data={inputData[componentName]} handler={inputHandler} />;
      }
      console.warn(`Component ${componentName} not found`);
      return null;
    });
  };

  return (
    <div className={page}>
      {!inApiCall && renderComponents()}
    </div>
  );
}