'use client'
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
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
import { PageManagement } from "@/util/PermissionIndex";
import { checkPermission } from "@/util/Util";

// // Utility function to check permissions
// const checkPermission = (userPermissions, pagePermissions) => {
//   // Ensure userPermissions is an array
//   if (!Array.isArray(userPermissions)) {
//     userPermissions = [userPermissions]; // If it's not an array, make it one
//   }
  
//   return userPermissions.includes(pagePermissions);
// };

const List = () => {
  const router = useRouter(); // Replaces useNavigate from React Router
  const [columns, setColumns] = useState(Config.PageTableSetting);
  const [rows, setRows] = useState([]);
  const [filters, setFilters] = useState({ status: [1, 2, 3] });
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const [permission, isPermission] = useState({});
  const [inApiCall, setApiCall] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({});
  const [updateFields, setUpdateFields] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    slug_url: '',
    meta_title: '',
    meta_description: '',
    content: ''
  });
  const role = JSON.parse(localStorage.getItem(Const.LoggedInRolePermission));
  useEffect(() => {
    const check = checkPermission(role.pagemanagement, PageManagement);
    console.log("kjdksk",check)
    isPermission(check);
  },[]);

  // Use effect to load the data for the page
  useEffect(() => {
    const admin_id = role?.id;
    const request = {
      fields: columns,
      perPage: 20,
      page: page,
      admin_id: admin_id,
      filter: filters,
    };

    const fetchData = async () => {
      await list(request, (res) => {
        setRows(res);
        apiCallStatus();
        setIsLoadMore(false);
      });
    };

    if (columns) {
      fetchData();
    }
  }, [filters, page, columns]);

  /* Handle Add Edit */
  const handleAddEditToggle = async (id) => {
    if (id) {
      setEdit(true);
      await getDetails(id, setUpdateFields);
    } else {
      setEdit(false);
      setInput({});
    }
    setOpen(!open); 
  };

  console.log(rows)
  // Set API call status
  const apiCallStatus = () => {
    setApiCall(false);
  };

  // Handle load more functionality
  const handleLoadMore = useCallback(async () => {
    if (isLoadMore) return;
    setIsLoadMore(true);
    const request = {
      fields: columns,
      perPage: 20,
      page: page + 1,
      admin_id: role.id,
      filter: filters,
    };

    await list(request, (res) => {
      setRows(res);
      apiCallStatus();
    });
    setPage((prevPage) => prevPage + 1);
  }, [page, isLoadMore]);

  // Render Loader while API is being called
  if (inApiCall) {
    return <Loader />;
  }

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    handleAddEditToggle();
  };

  /* Handle Status Action */
  const handleStatusAction = async (id, status) => {
    const payload = { id: id, admin_id: Admin.id };
    if (Const.Active === status) {
      await activate(payload, onSuccessStatusUpdate);
    } else if (Const.Inactive === status) {
      await inActivate(payload, onSuccessStatusUpdate);
    } else if (Const.Draft === status) {
      await draft(payload, onSuccessStatusUpdate);
    } else if (Const.Trash === status) {
      await trash(payload, onSuccessStatusUpdate);
    }
  };

  const handlePageDataEdit = (page_id) => {
    router.push(`/dashboard/admin/${page_id}`)
  };

  // Main Component JSX
  return (
    <section className="student-list">
      <PageHeading title={"Page List"} filters={filters} />
      
      {/* Filters Section */}
      <FilterSection 
        filters={filters} 
        setFilters={setFilters} 
        isPermission={permission} 
        handleAddEditToggle={handleAddEditToggle}
      />

      {/* Table of pages */}
      <PageListTable 
       columns={columns}
       rows={rows}
       handleAddEditToggle={handleAddEditToggle}
       handleStatusAction={handleStatusAction}
       isPermission={permission}
       handleLoadMore={handleLoadMore}
       isLoadMore={isLoadMore}
       handlePageDataEdit={handlePageDataEdit}
      />

      {/* Loader spinner */}
      {isLoadMore && (
        <BeatLoader color="#0d6efd" size={10} cssOverride={{ margin: "auto", textAlign: "center" }} />
      )}

      {/* Create Page Component */}
      <CreatePage 
        open={open} 
        handleToggle={handleAddEditToggle} 
        handleFormInput={handleFormInput}
        handleFormSubmit={handleFormSubmit}
        field={formData}
      />

      {/* Alert Popup */}
      <AlertPopup 
        title={"Alert"} 
        content={"Content goes here"} 
        handleFormSubmit={() => {}} 
      />
    </section>
  );
};

export default List;