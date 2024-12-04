
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import PageListTable from '../../../components/admindashboard/pagemanagement/PageListTable';
import FilterSection from '../../../components/admindashboard/pagemanagement/FilterSection';
import CreatePage from '../../../components/admindashboard/pagemanagement/CreatePage';
import PageHeading from '../../../components/admindashboard/common/PageHeading';
import Loader from "../../../components/common/Loader";
import AlertPopup from "../../../components/admindashboard/common/AlertPopup";
import { Const } from "../../../util/Constants";
import { FiAlertCircle } from "react-icons/fi";
import Config from "../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import {
  list,
  tablesetting,
  updateTableSetting,
  getDetails,
  addEditPage,
  activate,
  inActivate,
  draft,
  trash,
  duplicate,
} from "../../../api/admin/PageAPI";


const List = ({isPermission}) => {
  let localFields = JSON.parse(localStorage.getItem("PageTableSetting"))
  ? JSON.parse(localStorage.getItem("PageTableSetting"))
  : Config.PageTableSetting;

  if (!localStorage.getItem("PageTableSetting")) {
    localStorage.setItem("PageTableSetting", JSON.stringify(localFields));
  }

  let localParentData = JSON.parse(localStorage.getItem("PageParentData"))
  ? JSON.parse(localStorage.getItem("PageParentData"))
  : null;

  if (!localStorage.getItem("PageParentData")) {
    localStorage.setItem("PageParentData", JSON.stringify(localParentData));
  }

  let Admin = JSON.parse(localStorage.getItem("User"));
  let admin_id = Admin?.id;
  let role = Admin?.role;
  

  /* Alert Message */
  let message = <>
    <FiAlertCircle style={{width: "50px", height: "50px", color: "#e4a84f"}}/>
    <p className="mb-0">Are you sure?</p>
  </>

  const navigate  = useNavigate();
  const location = useLocation();
  
  const referenceId = location?.state?.admin_id ? [location?.state?.admin_id] : [];
  const [columns, setColumns] = useState(localFields);
  const [rows, setRows] = useState([]);
  const [roles, setRoleList] = useState([]);
  const [emptyfilter, setEmptyFilter] = useState({status: [1,2,3]});
  const [filters, setFilters] = useState({status: [1,2,3]});
  const [inApiCall, setInApiCall] = useState(true);
  const [open, setOpen] = useState(false);
  const [field, setInput] = useState({});
  const [examField, setExamInput] = useState({});
  
  const [content, setContent] = useState(message);
  const [itemList, setItemList] = useState(columns);
  const [isEdit, setEdit] = useState(false);
  const [change, setChange] = useState(false);
  const [archivedStatus, setarchivedStatus] = useState(false);
  const [checkbox, setCheckbox] = useState({});
  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [parentId, setParentId] = useState(referenceId);
  const [parentData, setParentData] = useState(localParentData);
  const [rowsId, setRowsId] = useState(null);

  /* Initial Render or Dependency Change */
  useEffect(() => {
    let admin_id = Admin.id;
    let role = Admin.role;
    if(location?.state?.admin_id > 0 && location?.state?.role > 0){
        admin_id = location?.state?.admin_id;
        role = location?.state?.role;
    }
    async function fetchTableSetting() {
      await tablesetting({ admin_id: admin_id, role: role, page: "Pagemanagement" }, onSettingSuccess);
    }
    const request = {
      fields: columns,
      perPage: perPage,
      page: page,
      admin_id: admin_id,
      role: role,
      filter: filters
    };
    async function fetchList() {
      await list(request, onListSuccess);
    }
    if (columns === null) {
      fetchTableSetting();
    }
    fetchList();
  }, [filters, change]);

   /* List Response  */
  const onListSuccess = async (res) => {
    setRows(res);
    apiCallStatus();
    setIsLoadMore(false);
  };
  
  /* Handle Toggle */
  const handleToggle = () => {
    setOpen(!open);
  };

  /* Load More */
  const handleLoadMore = useCallback(async () => {
    if (isLoadMore) return;
    setIsLoadMore(true);
    const request = {
      fields: columns,
      perPage: perPage,
      page: page + 1,
      admin_id: admin_id,
      role: role,
      filter: filters
    };
    await list(request, onListSuccess);
    setPage((prevIndex) => prevIndex + 1);
  }, [perPage, isLoadMore]);
  
  /* Handle Form Input Value */
  const handleFormInput = ({target: {value, name}}) => {
    setInput({ ...field, [name]: value });
  };
  /* Handle Exam Form Input Value */
  const handleExamFormInput = ({ target: { value, name } }) => {
    setExamInput({ ...examField, [name]: value });
  };

  /* Handle Add Edit */
  const handleAddEditToggle = async (id) => {
    if (id) {
      setEdit(true);
      await getDetails(id, setUpdateFields);
    }else{
      setEdit(false);
      setInput({});
    }
    setOpen(!open);
  };

  /* Set Field Value for Edit */
  const setUpdateFields = async (res) => {
    setInput(await res);
  };

  /* Handle Form Submit */
  const handleFormSubmit = async () => {
    if (field?.id) {
      field.admin_id = Admin.id;
      await addEditPage(field, onSuccessForm);
    }else{
      const fields = Object.keys(field);
      const values = Object.values(field);
      const addReq = {fields: fields, values: values, admin_id: admin_id} 
      await addEditPage(addReq, onSuccessForm);
    }
  };

  /* After Form Submit Response */
  const onSuccessForm = (res) => {
    if (res) {
      setContent(res?.message || "Successfully Inserted");
      setInput({});
      setChange(!change);
    }else{
      setContent("Something went wrong!!!");
    }
  };

  /* Handle Status Action */
  const handleStatusAction = async (id, status) => {
    const payload = {id: id, admin_id: Admin.id};
    if (Const.Active === status) {
      await activate(payload, onSuccessStatusUpdate);
    }
    else if(Const.Inactive === status){
      await inActivate(payload, onSuccessStatusUpdate);
    }
    else if(Const.Draft === status){
      await draft(payload, onSuccessStatusUpdate);
    }
    else if(Const.Trash === status){
      await trash(payload, onSuccessStatusUpdate);
    }
  };

  /* On Success Status Update Response */
  const onSuccessStatusUpdate = async (res) => {
    setChange(!change);
    setContent(res.message);
  };

  /* Dragable Handle */
  /* Function to update list on Checked */
  const handleChecked = ({target: {name}}) => {
    const oldList = [...itemList];
    const newList = oldList.map((item => (item.field === name ? {...item, checked: item.checked === 1 ? 2 : 1 } : item)));
    setItemList(newList);
  };

  /* Function to update list on drop */
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Array of Object Sequence Updation 
    const newReorderedItem = Object.assign(reorderedItem, {sequence: droppedItem.destination.index + 1});
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, newReorderedItem);
    // Update State
    setItemList(updatedList);
  };

  /* Handle Table Setting on Save */
  const saveTableSetting = async () => {
    const tableReq = {fields : itemList, admin_id: Admin.id, role: Admin.role}
  	await updateTableSetting(tableReq, onSettingSuccess);
  };

  /* Table Setting Submit Response */
  const onSettingSuccess = async (res) => {
    setColumns(await res);
    localStorage.setItem("PageTableSetting", JSON.stringify(res));
    apiCallStatus();
  };

  /* Filter Handle */
  /* Handle Filter Input */
  const handleFilter = ({target: {type, checked, value, name}}) => {
    if (type === "checkbox") {
      if(name==="status"){
        if (!checked) {
          emptyfilter["status"] = emptyfilter["status"].filter((element) => Number(element)!==Number(value));
        }else{
          emptyfilter["status"] = emptyfilter["status"].filter((element) => Number(element)!==Number(value));
          emptyfilter["status"].push(Number(value));
        }
      }

    }else{
      emptyfilter[[name]] = value;
    }
    setEmptyFilter({...emptyfilter});
  };

  const handleDateRangeFilter = (dates, dateStrings, name) => {
    if (dateStrings) {
      if (name==="exam_date") {
        const start_date = dateStrings[0];
        const end_date = dateStrings[1]; 
        emptyfilter[[name]] = {from: start_date, till: end_date};
      }
      if (name==="created_date") {
        const start_date = dateStrings[0];
        const end_date = dateStrings[1]; 
        emptyfilter[[name]] = {from: start_date, till: end_date};
      }
      setEmptyFilter({...emptyfilter});
    }
  };

  const handleClearFilter = () => {
    setFilters({
      status: [1,2,3]
    });
    setEmptyFilter({
      status: [1,2,3]
    });
    setRows([]);
  }


  /* Handle Archieved Filter */
  const handleArchivedFilter = () => {
    setarchivedStatus(!archivedStatus);
    if(!archivedStatus===false){
      delete filters["status"];
      setFilters({...filters});
    }else{
      setFilters({...filters, status: [Const.Trash]});
    }
  };

  /* Handle Filter on Save */
  const handleFilterSave = () => {
    setFilters({...emptyfilter});
    setRows([]);
  };

  
  /* Handle Filter on Save */
  const handleUpdatePermissionToggle = () => {
    
  };

  /* Handle Duplicate */
  const handleDuplicate = async (id) => {
    if (id) {
      const payload = {id: id, admin_id: Admin.id};
      await duplicate(payload, onSuccessDuplicate);
    }
  }

  /* On Success Duplicate Response */
  const onSuccessDuplicate = async (res) => {
    setChange(!change);
  }

  /* API Call Status */
  const apiCallStatus = () => {
    setInApiCall(false);
  };

  /* Handle Change in checkbox of status & exam */
  const handleChange = ({target: {name, value}}) => {
    if (checkbox[name] === true) {
      setCheckbox({...checkbox, [name]: value});
      setEmptyFilter(checkbox);
    } else {
      setCheckbox({...checkbox, [name]: value});
      setEmptyFilter(checkbox);
    }
  };
  
  const handlePageDataEdit = (page_id) => {
    navigate("/dashboard/admin/page-edit",  {state : {admin_id: admin_id, role: role, page_id: page_id }});
  };
  if (inApiCall) {return (<Loader />)};
  return (
    <>
      <section className="student-list">
        <PageHeading 
          title={"Page List"}
          filters={filters}
        />
        <FilterSection 
          itemList={itemList}
          saveTableSetting={saveTableSetting}
          handleChecked={handleChecked}
          handleDrop={handleDrop}
          handleAddEditToggle={handleAddEditToggle}
          filters={emptyfilter}
          handleArchivedFilter={handleArchivedFilter}
          archivedStatus={archivedStatus}
          handleFilter={handleFilter}
          handleFilterSave={handleFilterSave}
          isPermission={isPermission}
          handleUpdatePermissionToggle={handleUpdatePermissionToggle}
          handleDateRangeFilter={handleDateRangeFilter}
          handleChange={handleChange}
          handleClearFilter={handleClearFilter}
        />
        <PageListTable 
          columns={columns} 
          rows={rows}
          handleAddEditToggle={handleAddEditToggle}
          handleStatusAction={handleStatusAction}
          handleDuplicate={handleDuplicate}
          isPermission={isPermission}
          handleLoadMore={handleLoadMore}
          isLoadMore={isLoadMore}
          setRowsId={setRowsId}
          handlePageDataEdit={handlePageDataEdit}
        />
        {isLoadMore && (
          <BeatLoader
            color="#0d6efd"
            size={10}
            cssOverride={{ margin: "auto", textAlign: "center" }}
          />
        )}
      </section>
      <section className="">
        <CreatePage 
          title={`${isEdit ? `Edit` : `Add`} Page`}
          open={open} 
          field={field}
          handleToggle={handleToggle}
          handleFormInput={handleFormInput}
          handleFormSubmit={handleFormSubmit}
        />
        <div className={`${open ? `offcanvas-backdrop fade show`: `offcanvas fade`}`} onClick={handleToggle}></div>
        <AlertPopup 
          title={`${isEdit ? `Edit` : `Add`} Page`} 
          content={content} 
          handleFormSubmit={handleFormSubmit}
        />
        {/* <FilterSetting fields={columns} /> */}
      </section>
    </>
  )
}

export default List