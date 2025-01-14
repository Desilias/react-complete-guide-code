import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portailElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />,portailElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portailElement)}
    </Fragment>
  );
};
export default Modal;
