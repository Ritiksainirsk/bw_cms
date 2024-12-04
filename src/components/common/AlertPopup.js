import React from 'react'
import { SlClose } from 'react-icons/sl';

const AlertPopup = ({data}) => {
    console.log("data");
  return (
    <div className="modal fade" id="confirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="filtermenu-title m-0" id="staticBackdropLabel">Delete Admin</h5>
                    <SlClose role="button" className="offclose" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <p>
                        Do you want to delete the “Pankaj Pawar” admin permanently?
                    </p>
                    <div className="form-outline d-flex justify-content-between align-items-center pt-4" style={{gap: "12px"}}>
                        <button className="btn btn-primary w-100">Confirm</button>
                        <button className="btn btn-outline-primary w-100" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlertPopup