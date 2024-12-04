import React from "react";
import { SlClose } from "react-icons/sl";

const AlertPopup = ({ title, handleFormSubmit, content, isSuccessful }) => {
  console.log(isSuccessful);
  return (
    <div
      className="modal fade"
      id="confirmModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="filtermenu-title m-0">{title}</h5>
            <SlClose
              role="button"
              className="offclose"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body text-center">
            <div className="py-3">{content}</div>
            <div
              className="form-outline d-flex justify-content-between align-items-center pt-4"
              style={{ gap: "12px" }}
            >
              {isSuccessful ? (
                <button
                  className="btn btn-outline-primary w-100"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleFormSubmit}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-outline-primary w-100"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
