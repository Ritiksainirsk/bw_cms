import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetails } from "../../../api/admin/TemplateAPI";
import * as ComponentLibrary from '../../../components/admindashboard/edit/AllComponents';
import SaveFooter from "../../../components/admindashboard/common/SaveFooter";

export default function TemplateManagement() {

  const [inputData, setInputData] = useState({});
  const [components, setComponent] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [template, setTemplate] = useState({});
  const [inApiCall, setInApiCall] = useState(true);
  const [editorLoaded, setEditorLoaded] = useState(false);

  const mycomponents =[
    {
        id: 1,
        name: "ComponentOne",
        field: "components",
        description: "Component 1 Description",
        status: "active",
        edit:1,
        checked:0,
    },
    {
        id: 2,
        name: "ComponentTwo",
        field: "components",
        description: "Component 2 Description",
        status: "active",
        edit:1,
        checked:0,
    }];
  const router = useLocation();
  // get page-id = 1 => DMIT , DMIT-Delhi
  const template_id = router.pathname.split("/")[4];

  const handleSubmit = () => {
    console.log("submit");
  }
  // useeffect get page-data to edit via api using page-id , payload - admin,page-id, validation-token
  useEffect(() => {
    let payload = { id: template_id };
    async function get() {
      await getDetails(payload, onSuccess);
      //setComponent(mycomponents);
    }
    get();
  }, []);
  /* Api Call Status */
  const apiCallStatus = () => {
    setInApiCall(false);
  };

  const onSuccess = async (res) => {
    const response = await res;
    setInputData(JSON.parse(response?.data || '{}'));
    setTemplate(response?.template);  
    setMetaData(response?.metaData);  
    setComponent(JSON.parse(response?.components || '[{"id": 2,"name": "ComponentTwo","field": "components","description": "Component 2 Description","status": "active","edit"":1,"checked":0}]'));
    apiCallStatus();
    setEditorLoaded(true);
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
    console.log(components, inputData)
    return components.map((item,i) => {return item.name}).map((componentName, index) => {
      const Component = ComponentLibrary[componentName];
      if (Component) {
        return <Component key={index} data={inputData[componentName]} handler={inputHandler} editorLoaded={editorLoaded} />;
      }
      console.warn(`Component ${componentName} not found`);
      return null;
    });
  };

  return (
    <>
    <div className={`page-`}>
      {renderComponents()}
      {/* hello */}
    </div>
    <SaveFooter handleSubmit={handleSubmit}/>
    </>
  );
}