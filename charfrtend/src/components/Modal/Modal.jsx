import React from 'react';



const Modal = ({onConfirm, onCancel, slug}) => {
    return (
      
      <div className="k-modal" role="dialog" aria-modal="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Character</h5>
           
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete your Character?</p>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-danger" onClick={() => onConfirm(slug)}>Delete</button>
            <button type="button" className="btn btn-primary" onClick={onCancel}>Cancel</button>
            
          </div>
        </div>
      </div>
    </div>
    

    );
}

export default Modal;