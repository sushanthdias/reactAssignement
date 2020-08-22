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
            <div onClick={hide} className="modal">
              <div className="modal-body">
                <img
                  alt="logo"
                  className="avatarImg"
                  src={user?.profilepicture}
                ></img>
                <h5 className="dispalyModalName">{user?.name}</h5>
                <h6 className="dispalyModalEmail">{user?.email}</h6>
                <hr className="tophr" />
                <div className="list">
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
                  <span className="singoutText"> SignOut</span>
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
