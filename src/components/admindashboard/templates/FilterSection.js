import React, { useState } from 'react';
import { PiPlus } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import FilterMenu from './FilterMenu';
const FilterSection = ({isPermission, itemList, handleAddEditToggle, filters, handleFilter, handleFilterSave, handleArchivedFilter, archivedStatus, handleDateRangeFilter, handleChange, handleClearFilter}) => { 
    const [open, isOpen] = useState(false);

    const handleClose = () => {
        isOpen((prev) => !prev);
    }
    
  return (
    <>
    <div className="row my-3">
        <div className="col-md-12">
            <div className="filtersection">
                <div className="btn-group-filter gap-0">
                    {/* Create */}
                    {isPermission?.Add ? 
                        <button className="btn btn-primary" onClick={() => handleAddEditToggle()}><PiPlus style={{fontSize: "21px"}}/> Add Template</button> 
                    : ""
                    }
                    {/* View Archived */}
                    {isPermission?.ViewArchived ? 
                        <button className="btn btn-view" 
                            onClick ={() => handleArchivedFilter()}>
                            <span className="view-archived">{ archivedStatus ? "View All" : "View Archived"}</span>
                        </button> 
                    : ""
                    }
                </div>
                <div className="btn-group-filter">
                    {/* Filter Setting */}
                    
                    {/* Filter Menu */}
                    {isPermission?.Filter ? 
                    <>
                        <button className={`btn btn-outline-primary ${open ? `show` : ``}`} aria-expanded={open} data-bs-offset="10,16" onClick={handleClose}><FiFilter style={{fontSize: "21px"}} /> Filter</button>
                        <FilterMenu 
                        open={open} handleClose={handleClose} 
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
                    :""
                    }
                </div>
            </div>
        </div>
    </div>
    {/* <FilterChip /> */}
    </>

  )
}

export default FilterSection