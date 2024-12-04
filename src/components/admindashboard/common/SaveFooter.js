import React from 'react';

export default function SaveFooter({handleSubmit}) {
  return (
    <>
      <div className="footer" style={{zIndex: 99}}>
        <span className="btn cancel">Cancel</span>
          <div className="form-outline d-flex justify-content-between align-items-center mt-0" style={{gap: "12px"}}>
              <button className="btn btn-outline-primary">Save & Exit</button>
              <button className="btn btn-primary" onClick={() => handleSubmit()}>Save & Exit</button>
          </div>
      </div>
    </>
  )
}
