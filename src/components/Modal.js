import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { history } from "../index";

const logoutClick = () => {
  history.push("/");
};

const Modal = ({ isShowing, hide, users, user }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img className="avatarImg" src={user?.profilepicture}></img>
                <h5 className="dispalyModalName">{user?.name}</h5>
                <h6 className="dispalyModalEmail">{user?.email}</h6>
                <hr className="newHr" />
                <div style={{ maxHeight: "70px", overflowY: "auto" }}>
                  <img className="smallimg" src={users[0]?.profilepicture} />{" "}
                  <h3>{users[0]?.name}</h3>
                  <hr className="newHr" />
                  <img className="smallimg" src={users[1]?.profilepicture} />
                  <h3>{users[1]?.name}</h3>
                  <hr className="newHr" />
                  <img className="smallimg" src={users[2]?.profilepicture} />
                  <h3>{users[2]?.name}</h3>
                  <hr className="newHr" />
                  <img
                    className="smallimg"
                    src={users[3]?.profilepicture}
                  />{" "}
                  <h3>{users[3]?.name}</h3>
                  <hr className="newHr" />
                  <img className="smallimg" src={users[4]?.profilepicture} />
                  <h3>{users[4]?.name}</h3>
                  <hr className="newHr" />
                  <img
                    className="smallimg"
                    src={users[5]?.profilepicture}
                  />{" "}
                  <h3>{users[5]?.name}</h3>
                  <hr className="newHr" />
                </div>
                <Button onClick={logoutClick} className="outButton">
                  SignOut
                </Button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
export default Modal;
