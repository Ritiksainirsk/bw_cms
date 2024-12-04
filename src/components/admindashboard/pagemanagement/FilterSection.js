import React, { useState } from "react";
import { PiPlus } from "react-icons/pi";
import { FiSettings, FiFilter, FiDownload } from "react-icons/fi";
import FilterMenu from "./FilterMenu";
import FilterChip from "./FilterChip";
import { Const } from "../../../util/Constants";
import FilterSetting from "./FilterSetting";
const FilterSection = ({
  isPermission,
  itemList,
  handleChecked,
  handleDrop,
  handleAddEditToggle,
  saveTableSetting,
  filters,
  handleFilter,
  handleFilterSave,
  handleArchivedFilter,
  archivedStatus,
  handleDateRangeFilter,
  handleChange,
  handleClearFilter,
}) => {
  const [open, isOpen] = useState(false);

  const handleClose = () => {
    isOpen((prev) => !prev);
  };
  return (
    <>
      <div className="row my-3">
        <div className="col-md-12">
          <div className="filtersection">
            <div className="btn-group-filter gap-0">
              {/* Create */}
              {isPermission?.Add ? (
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddEditToggle()}
                >
                  <PiPlus style={{ fontSize: "21px" }} /> Add Page
                </button>
              ) : (
                ""
              )}
              {/* View Archived */}
              {isPermission?.ViewArchived ? (
                <button
                  className="btn btn-view"
                  onClick={() => handleArchivedFilter()}
                >
                  <span className="view-archived">
                    {archivedStatus ? "View All" : "View Archived"}
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="btn-group-filter">
              {isPermission?.BulkAction ? (
                <div className="">
                  <select className="form-select">
                    <option value="">Select Action</option>
                    <option value="1">Export Selected</option>
                    <option value="2">Export List</option>
                    <option value="3">Restore</option>
                  </select>
                </div>
              ) : (
                ""
              )}
              {/* Filter Setting */}
              {isPermission?.TableSetting ? (
                <>
                  <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#filtersetting"
                    aria-controls="filtersetting"
                  >
                    <FiSettings style={{ fontSize: "21px" }} /> Setting
                  </button>
                  <FilterSetting
                    itemList={itemList}
                    handleChecked={handleChecked}
                    handleDrop={handleDrop}
                    saveTableSetting={saveTableSetting}
                  />
                </>
              ) : (
                ""
              )}

              {/* Filter Menu */}
              {isPermission?.Filter ? (
                <>
                  <button
                    className={`btn btn-outline-primary ${open ? `show` : ``}`}
                    aria-expanded={open}
                    data-bs-offset="10,16"
                    onClick={handleClose}
                  >
                    <FiFilter style={{ fontSize: "21px" }} /> Filter
                  </button>
                  <FilterMenu
                    open={open}
                    handleClose={handleClose}
                    filters={filters}
                    handleFilter={handleFilter}
                    handleFilterSave={handleFilterSave}
                    handleDateRangeFilter={handleDateRangeFilter}
                    handleChange={handleChange}
                    handleClearFilter={handleClearFilter}
                  />
                  {open && (
                    <div className="overlay" onClick={handleClose}></div>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <FilterChip /> */}
    </>
  );
};

export default FilterSection;
