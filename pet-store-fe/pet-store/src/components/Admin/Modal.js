import React from 'react';
import ReactDom from 'react-dom';
import "./Modal.css"
const Modal = ({isShowing, hide}) => isShowing ? ReactDom.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>    
                        </button>
                    </div>   
                    <div className="modal-body">
                        <div className="form-group">
                                
                        </div>   
                    </div>    
                </div> 
            </div>    
    </React.Fragment>, document.body
): null;
export default Modal;