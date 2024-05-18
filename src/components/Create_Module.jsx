import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Create_Module = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isModalOpen = location.pathname === '/create-module';

  return (
    <>
      <div
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create New Module</h5>
              <button
                type="button"
                className="close"
                onClick={() => navigate('/')}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <label for="message-text" class="col-form-label">Title of Module:</label>
            <textarea class="form-control" id="message-text"></textarea>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/')}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_Module;
