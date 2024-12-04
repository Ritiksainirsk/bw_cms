import React from 'react';
import Dragable from '../common/Dragable';
import { SlClose } from 'react-icons/sl';
import { TfiSearch } from 'react-icons/tfi';
const FilterSetting = ({itemList, handleChecked, handleDrop, saveTableSetting, handleUpdatePermissionToggle}) => {
  return (
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="filtersetting" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Admin Table Setting</h5>
            <SlClose className="offclose" role="button" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
            <div className="mt-4 vertical-last">
                <Dragable itemList={itemList} handleChecked={handleChecked} handleDrop={handleDrop} handleUpdatePermissionToggle={handleUpdatePermissionToggle} />
                <div className="form-outline d-flex justify-content-between align-items-center mt-auto" style={{gap: "12px"}}>
                    <button className="btn btn-outline-primary w-100" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                    <button className="btn btn-primary w-100" onClick={() => saveTableSetting()}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterSetting