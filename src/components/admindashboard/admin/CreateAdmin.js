import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import FileUpload from '../common/FileUpload';
import MultiSelectWithSearch from '../../field/MultiSelectWithSearch';
const CreateAdmin = ({title, open, handleToggle, field, handleFormInput, handleFormSelect,roles, examlist, parentData, handleParentId, examField}) => {
    const [showPassword, setShowPassword] = useState(false);
    const roleoption = roles?.map((item, i) => <option key={item.id} value={item.id}>{item.role_name}</option>);
    const parentOption = parentData?.map((item, i) => <option key={`${item.name}_${item.id}`} value={item.id}>{item.name}</option>);
    const examListOption = examlist?.map((item, i) =>  {return {label: item.exam_name, value: item.exam_id }});
  return (
    <div className={`offcanvas offcanvas-end ${open ? `show` : ``}`} data-bs-scroll="true">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <SlClose className="offclose" role="button" onClick={() => handleToggle()} />
        </div>
        <div className="offcanvas-body">
            <div className="mt-4">
                <div className="vertical-last">
                    <div className="form-outline mb-4">
                        <div className="mb-4">
                            <label className="form-label" htmlFor="admin-name">
                                Admin Profile<span className="required">*</span>
                            </label>
                            <FileUpload />
                        </div>
                        {/* TODO: add fields in form for admin -> parent, basic details, extra custom details */}
                        <div className="col-md-12 text-start">
                            <label className="form-label">Super Admin</label>
                            <div className="">
                                <select className="form-select" id="parent_id" name="parent_id" onChange={handleParentId} >
                                    <option value="">Select Association Brand</option>
                                    {parentOption}
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="name">
                                Admin Name<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Admin Name"
                                value={field?.name || ""}  
                                name="name"
                                onChange={handleFormInput}
                                style={{width: "100%!important"}}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="user_name">
                                Username<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="user_name"
                                className="form-control"
                                placeholder="Username"
                                name="user_name"
                                onChange={handleFormInput}
                                value={field?.user_name || ""}  
                                style={{width: "100%!important"}}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="password">
                                Password<span className="required">*</span>
                            </label>
                            <div className="d-flex">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="form-control pass-view"
                                    placeholder="Enter Password"
                                    onChange={handleFormInput}
                                    value={field?.password || ""}
                                    style={{width: "100%!important"}}
                                />
                                <span className="input-group-append">
                                    <button type="button" className="search-append btn btn-bg">
                                        {showPassword ? 
                                        <FiEye onClick={()=>setShowPassword(!showPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>
                                        : <FiEyeOff onClick={()=>setShowPassword(!showPassword)} style={{width: "18px", height: "18px", color: "#0d7bdb"}}/>}
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="email">
                                Email Address<span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                onChange={handleFormInput}
                                value={field?.email || ""}  
                                style={{width: "100%!important"}}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="contact_no">
                                Contact No<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="contact_no"
                                className="form-control"
                                placeholder="Contact No"
                                name="contact_no"
                                onChange={handleFormInput}
                                value={field?.contact_no || ""}  
                                style={{width: "100%!important"}}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="role" >
                                Role<span className="required">*</span>
                            </label>
                            <select id="role" className="form-select" name="permission_role" value={field?.permission_role || 0} onChange={handleFormInput}>
                                <option value="0">Select Access Role</option>
                                {roleoption}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="examlist" >
                                Exam List<span className="required">*</span>
                            </label>
                            <MultiSelectWithSearch options={examListOption} name={"exam_id"} placeholder={"Select Exam"} handleChange={handleFormSelect} selected={examField?.exam_id || []}/>
                        </div>
                    </div>
                    <div className="form-outline d-flex justify-content-between align-items-center mt-auto" style={{gap: "12px"}}>
                        <button className="btn btn-outline-primary w-100" type="button" onClick={()=> handleToggle()} >Cancel</button>
                        <button className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#confirmModal">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAdmin