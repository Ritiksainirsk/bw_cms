import React from "react"
import { useNavigate } from "react-router-dom"


const UnAuthPage = () => {
    const navigate = useNavigate();
    return (
      <>
        <section className="questions-remove bg-bg">
          <div className="container-fluid pt-4 pb-4">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-5"></div>
              <div className="col-md-4">
                <div className="timerdiv mt-3"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row mr-17">
              <div className="col-md-12 text-center">
                <img src="/images/pen.png" alt="logo" className="mg-30 " />
                <h3 className="oops">Oops!</h3>
                <p className="txtp">
                  You are not authorized to access this page.
                </p>
                <span className="startbutton" onClick={() => navigate("/login")}>
                  Back to Login page
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
export default UnAuthPage
