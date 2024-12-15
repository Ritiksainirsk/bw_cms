'use client'
import React, { useEffect, useState } from "react";
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
// ddd
import DynamicPageTemplate from '../../../components/admindashboard/pagemanagement/DynamicPageTemplate';

const List = () => {
  const router = useRouter(); 
  const [columns, setColumns] = useState(Config.PageTableSetting);
  const [rows, setRows] = useState([]);
  const [filters, setFilters] = useState({ status: [1, 2, 3] });
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(1);
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
  const [alertPopup, setAlertPopup] = useState({
    show: false,
    type: '',
    message: ''
  });
  // ----
  const [editContentOpen, setEditContentOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  // ---
  const role = JSON.parse(localStorage.getItem(Const.LoggedInRolePermission));
  const [permission, isPermission] = useState({});

  useEffect(() => {
    const check = checkPermission(role.pagemanagement, PageManagement);
    isPermission(check);
  },[]);

  useEffect(() => {
    fetchPages();
  }, [filters, page]);

  const fetchPages = async () => {
    try {
      // setApiCall(true);
      // const data = await list(
      //   { ...filters, page },
      //   (response) => {
      //     setRows(prev => page === 1 ? response.data : [...prev, ...response.data]);
      //     setIsLoadMore(response.data.length >= Config.PageLimit);
      //   },
      //   (error) => {
      //     setAlertPopup({
      //       show: true,
      //       type: 'error',
      //       message: error.message
      //     });
      //   }
      // );
       
          const response = await fetch("http://localhost:4001/api/pages");
          const data = await response.json();
          setRows(data.data || []);
        
  

    } finally {
      setApiCall(false);
    }
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (formData) => {
    try {
      setApiCall(true);
      console.log('Submitting form data:', formData);
      
      if (!formData.title || !formData.content) {
        setAlertPopup({
          show: true,
          type: 'error',
          message: 'Title and content are required'
        });
        return;
      }

      await addEditPage(
        formData,
        (response) => {
          console.log('Success response:', response);
          setAlertPopup({
            show: true,
            type: 'success',
            message: 'Page saved successfully'
          });
          setOpen(false);
          setInput({});
          setPage(1);
          fetchPages();
        },
        (error) => {
          console.error('Error saving page:', error);
          setAlertPopup({
            show: true,
            type: 'error',
            message: error.message || 'Failed to save page'
          });
        }
      );
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setAlertPopup({
        show: true,
        type: 'error',
        message: error.message || 'An unexpected error occurred'
      });
    } finally {
      setApiCall(false);
    }
  };

  const handleToggle = () => {
    setOpen(!open);
    if (!open) {
      setInput({});
      setEdit(false);
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

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

  const handleStatusAction = async (id, status) => {
    const payload = { id: id, admin_id: role.id };
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
// ----
  const handlePageDataEdit = (page) => {
    setSelectedPage(page);
    router.push(`/dashboard/edit_page/${page.template_id}`)
  };

  const handleSaveContent = async (updatedPageData) => {
    try {
      const response = await fetch(`http://localhost:4001/api/pages/${updatedPageData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPageData),
      });

      if (!response.ok) throw new Error('Failed to update page');

      // Refresh the page list
      fetchPages();
      setEditContentOpen(false);
      setSelectedPage(null);

      setAlertPopup({
        show: true,
        type: 'success',
        message: 'Page content updated successfully'
      });
    } catch (err) {
      console.error('Error updating page:', err);
      setAlertPopup({
        show: true,
        type: 'error',
        message: 'Failed to update page content'
      });
    }
  };
// ------
  return (
    <>
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
         handleLoadMore={loadMore}
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
          handleToggle={handleToggle} 
          field={input}
          handleFormInput={handleFormInput}
          handleSubmit={handleSubmit}
        />

        {/* Alert Popup */}
        <AlertPopup 
          show={alertPopup.show}
          type={alertPopup.type}
          message={alertPopup.message}
          onClose={() => setAlertPopup({ show: false, type: '', message: '' })}
        />

        {inApiCall && <Loader />}
      </section>
{/* ---- */}
      {/* Edit Content Offcanvas */}
      <div className={`offcanvas offcanvas-end ${editContentOpen ? 'show' : ''}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Edit Page Content</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setEditContentOpen(false);
              setSelectedPage(null);
            }}
          ></button>
        </div>
        <div className="offcanvas-body">
            {selectedPage && (
              <DynamicPageTemplate
                pageData={selectedPage}
                onSave={handleSaveContent}
              />
            )}
        </div>
      </div>
      {/* ----------- */}
    </>
  );
};

export default List;