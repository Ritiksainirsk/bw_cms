import React, { useState } from "react";
import { SlClose } from "react-icons/sl";
import { TfiSearch } from "react-icons/tfi";
import { Const } from '../../../util/Constants';
import DateRange from '../../field/DateRange';

const FilterMenu = ({
  open,
  handleClose,
  filters,
  handleDateRangeFilter,
  handleFilter,
  handleFilterSave,
  ExamList,
  handleClearFilter,
}) => {
  // const count = Object.values(checkbox).reduce((previous, current) => previous + current, 0);
  const statusList = [
    { id: Const.Active, name: "Active" },
    { id: Const.Inactive, name: "Inactive" },
    { id: Const.Draft, name: "Draft" },
    { id: Const.Trash, name: "Trash" },
  ];

  const examCheckList = ExamList.map((item, i) => {
    return (
      <div
        key={item.exam_name}
        className="d-flex align-items-center mb-1 options"
        style={{ padding: "10px 12px" }}
      >
        <input
          className="form-checkbox form-check-input"
          type="checkbox"
          id="exam_id"
          name="exam_id"
          checked={filters["exam_id"].indexOf(item.exam_id) != -1 || false}
          value={item.exam_id}
          onChange={handleFilter}
        />
        <label className="form-checkbox-label">{item.exam_name}</label>
      </div>
    );
  });

  const statusCheckList = statusList.map((item, i) => {
    return (
      <div
        key={item.name}
        className="d-flex align-items-center mb-1 options"
        style={{ padding: "10px 12px" }}
      >
        <input
          className="form-checkbox form-check-input"
          type="checkbox"
          id="status"
          name="status"
          checked={filters["status"].indexOf(item.id) != -1 || false}
          value={item.id}
          onChange={handleFilter}
        />
        <label className="form-checkbox-label">{item.name}</label>
      </div>
    );
  });
  return (
    <div
      className={`dropdown-menu dropdown-menu-lg-end ${open ? `show` : ``}`}
      id="filtermenu"
      style={{
        position: "absolute",
        inset: "0px 0px auto auto",
        margin: "0px",
        transform: "translate(-122.5px, 132px)",
      }}
    >
      <div className="filtermenu-header">
        <h5 className="filtermenu-title m-0">Filters</h5>
        <SlClose className="offclose" type="button" onClick={handleClose} />
      </div>
      <div className="filtermenu-body">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <ul className="list-group">
                  <li
                    className="dropdown-item active"
                    data-bs-toggle="tab"
                    href="#name-tab"
                  >
                    Admin Name
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#username-tab"
                  >
                    Username
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#email-tab"
                  >
                    Email Address
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#contact-tab"
                  >
                    Contact Number
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#reg-partner-tab"
                  >
                    Regional Partner Name
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#exam-tab"
                  >
                    Exam{" "}
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#exam-date-tab"
                  >
                    Exam Date
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#created-date-tab"
                  >
                    Created Date
                  </li>
                  <li
                    className="dropdown-item"
                    data-bs-toggle="tab"
                    href="#status-tab"
                  >
                    <div className="d-flex">
                      <p className="text-truncate w-90 m-0">Status</p>
                      {/* {count && count!==0 ? 
                          <span>{"("+count+")"}</span>
                          : ""} */}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 vertical-last">
                <div className="tab-content">
                  <div className="tab-pane container active" id="name-tab">
                    <div className="form-outline d-flex mb-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={filters?.name || ""}
                        onChange={handleFilter}
                        className="form-control search-group"
                        placeholder="Enter Your Search"
                        style={{ width: "100%!important" }}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          className="search-append btn btn-bg"
                        >
                          <TfiSearch style={{ fontSize: "14px!important" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane container" id="username-tab">
                    <div className="form-outline d-flex mb-4">
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={filters?.user_name || ""}
                        onChange={handleFilter}
                        className="form-control search-group"
                        placeholder="Enter Your Search"
                        style={{ width: "100%!important" }}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          className="search-append btn btn-bg"
                        >
                          <TfiSearch style={{ fontSize: "14px!important" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane container" id="email-tab">
                    <div className="form-outline d-flex mb-4">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={filters?.email || ""}
                        onChange={handleFilter}
                        className="form-control search-group"
                        placeholder="Enter Your Search"
                        style={{ width: "100%!important" }}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          className="search-append btn btn-bg"
                        >
                          <TfiSearch style={{ fontSize: "14px!important" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane container" id="contact-tab">
                    <div className="form-outline d-flex mb-4">
                      <input
                        type="text"
                        id="contact_no"
                        name="contact_no"
                        value={filters?.contact_no || ""}
                        onChange={handleFilter}
                        className="form-control search-group"
                        placeholder="Enter Your Search"
                        style={{ width: "100%!important" }}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          className="search-append btn btn-bg"
                        >
                          <TfiSearch style={{ fontSize: "14px!important" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane container" id="reg-partner-tab">
                    <div className="form-outline d-flex mb-4">
                      <input
                        type="text"
                        id="spoc_name"
                        name="spoc_name"
                        value={filters?.spoc_name || ""}
                        onChange={handleFilter}
                        className="form-control search-group"
                        placeholder="Enter Your Search"
                        style={{ width: "100%!important" }}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          className="search-append btn btn-bg"
                        >
                          <TfiSearch style={{ fontSize: "14px!important" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane container" id="website-tab">
                    <div className="form-outline d-flex mb-4">
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={filters?.website || ""}
                        onChange={handleFilter}
                        className="form-control search-group"
                        placeholder="Enter Your Search"
                        style={{ width: "100%!important" }}
                      />
                      <span className="input-group-append">
                        <button
                          type="button"
                          className="search-append btn btn-bg"
                        >
                          <TfiSearch style={{ fontSize: "14px!important" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane container" id="exam-tab">
                    {examCheckList}
                  </div>
                  <div className="tab-pane container" id="exam-date-tab">
                    <div className="form-outline d-flex mb-4">
                      <DateRange
                        name={"exam_date"}
                        handleFilter={handleDateRangeFilter}
                      />
                    </div>
                  </div>
                  <div className="tab-pane container" id="created-date-tab">
                    <div className="form-outline d-flex mb-4">
                      <DateRange
                        name={"created_date"}
                        handleFilter={handleDateRangeFilter}
                      />
                    </div>
                  </div>
                  <div className="tab-pane container" id="status-tab">
                    {statusCheckList}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="form-outline d-flex justify-content-end align-items-center"
                style={{ gap: "12px" }}
              >
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleClearFilter()}
                >
                  Clear Filter
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleClose()}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleFilterSave()}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
