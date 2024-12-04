import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';
import FileUpload from '../common/FileUpload';

const CreatePage = ({title, open, handleToggle, field, handleFormInput}) => {
    
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
                            <label className="form-label" htmlFor="title">
                                Title<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="form-control"
                                placeholder="Page Title"
                                defaultValue={field?.title || ""}  
                                name="title"
                                onChange={handleFormInput}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="slug_url">
                                Slug URL<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="slug_url"
                                className="form-control"
                                placeholder="Slug URL"
                                name="slug_url"
                                onChange={handleFormInput}
                                defaultValue={field?.slug_url || ""}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="meta_title">
                                Meta Title<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="meta_title"
                                className="form-control"
                                placeholder="Meta Title"
                                name="meta.title"
                                onChange={handleFormInput}
                                defaultValue={field?.meta?.title || ""}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="meta_description">
                                Meta Description<span className="required">*</span>
                            </label>
                            <textarea
                                id="meta_description"
                                className="form-control"
                                placeholder="Meta Description"
                                name="meta.description"
                                onChange={handleFormInput}
                                defaultValue={field?.meta?.description || ""}  
                                rows="3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="meta_keywords">
                                Meta Keywords<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="meta_keywords"
                                className="form-control"
                                placeholder="Meta Keywords"
                                name="meta.keywords"
                                onChange={handleFormInput}
                                defaultValue={field?.meta?.keywords || ""}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="meta_image">
                                Meta Image<span className="required">*</span>
                            </label>
                            <FileUpload 
                                name="meta.image"
                                inputField={field?.meta}
                                handleInputChange={handleFormInput}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="status">
                                Status<span className="required">*</span>
                            </label>
                            <select
                                id="status"
                                className="form-select"
                                name="status"
                                onChange={handleFormInput}
                                defaultValue={field?.status || ""}
                            >
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
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

export default CreatePage