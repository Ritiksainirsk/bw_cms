import React from 'react';
import { FiX } from 'react-icons/fi';

const FilterChip = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex flex-row overflow-auto gap-3">
              <span className="filter-chip">Completed <FiX role="button"/></span>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default FilterChip