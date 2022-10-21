import React from 'react'
import notFind from "../images/notFind.png";

const AlertModal = () => {
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="alert-search">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <figure className="d-flex justify-content-center">
                <img
                  className="img-fluid w-50 h-50"
                  src={notFind}
                  alt="img-notFind"
                />
              </figure>
              <h1 className="modal-title text-center">Upps...!</h1>
              <h6 className="text-center">We didn&apos;t have find nothing! </h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AlertModal