import React from 'react'
import { SlClose } from 'react-icons/sl';

const DuplicatePopup = ({title, handleDuplicate, handleParentId, parentData, parentId, rowsId}) => {
    const option = parentData?.map((item, i) => <option key={`${item.name}_${item.id}`} value={item.id}>{item.name}</option>);
  return (
    <div className="modal fade" id="duplicateModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="filtermenu-title m-0">{title}</h5>
                    <SlClose role="button" className="offclose" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <div className="py-3">
                        <div className="col-md-12 text-start">
                            <h3 className="title mb-2">Parent Admin</h3>
                            <div className="">
                                <select className="form-select" id="parent_id" name="parent_id" onChange={handleParentId} value={parentId[0]}>
                                    <option value="">Select Parent Admin</option>
                                    {option}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-outline d-flex justify-content-between align-items-center pt-4" style={{gap: "12px"}}>
                        <button className="btn btn-primary w-100" onClick={() => handleDuplicate(rowsId)}>Confirm</button>
                        <button className="btn btn-outline-primary w-100" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DuplicatePopup