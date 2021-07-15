import '../scss/modal.scss'
import { useState } from 'react';

const Modal = (props) => {
    
    return(
        <div>
            <div className="backdrop" onClick={props.onModalClick}/>
            <div className="modal">
                <div className="modal-head">
                    <h2>{props.title}</h2>
                </div>
                <div className="modal-body">
                    <p>{props.desription}</p>
                    <div className="modal-footer">
                        <button type="button" onClick={props.onModalClick}>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;