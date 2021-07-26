import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalEle = document.getElementById('overlay');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClick}/>, portalEle)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEle)}
        </Fragment>
        
    )
}

export default Modal;