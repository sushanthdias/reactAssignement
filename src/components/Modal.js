import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { history } from "../index";

const logoutClick = () => {
  history.push("/");
};

const Modal = ({ isShowing, hide, users, user }) => {
  var AllUsers = [];
  /* eslint-disable-next-line */
  if (users != []) {
    AllUsers = users["users"];
  }
  return isShowing
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
                <img
                  alt="logo"
                  className="avatarImg"
                  src={user?.profilepicture}
                ></img>
                <h5 className="dispalyModalName">{user?.name}</h5>
                <h6 className="dispalyModalEmail">{user?.email}</h6>
                <hr className="newHr" />
                <div style={{ maxHeight: "70px", overflowY: "auto" }}>
                  {AllUsers &&
                    AllUsers.map((u) => (
                      <div>
                        <img
                          alt="logo"
                          className="smallimg"
                          src={u?.profilepicture}
                        />
                        <h3>{u?.name}</h3>
                        <hr className="newHr" />
                      </div>
                    ))}
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
};
export default Modal;
