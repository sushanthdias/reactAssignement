import React, { useState } from "react";
import { MessageList } from "react-chat-elements";

const MessageBox = (props) => {
  const showChat: boolean = props.showChat;
  const user: any = props.user;
  const [collapse, setcollapse] = useState(false);

  const handleClose = () => {
    props.clickMe(props);
  };

  return (
    <div>
      {collapse ? (
        <div className="collapseChatbox">
          <span>
            <img className="profileImage" src={user?.profilepicture} alt="" />
            <span className="nameHeader">{user?.name}</span>
          </span>

          <i onClick={() => handleClose()} className="fa fa-times"></i>
          <i
            onClick={() => setcollapse(false)}
            className="fa fa-angle-up chatIcon"
          ></i>
        </div>
      ) : null}
      {/* eslint-disable-next-line */}
      {showChat && collapse == false ? (
        <div className="MessageWrapper">
          <div className="MessageBoxOpen">
            <span>
              <img className="profileImage" src={user?.profilepicture} alt="" />
              <span className="nameHeader">{user?.name}</span>
            </span>
            <i
              onClick={() => setcollapse(true)}
              className="fa fa-angle-down chatIconDown"
            ></i>
            <i onClick={() => handleClose()} className="fa fa-times"></i>
          </div>
          <div className="BoxContainer">
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={[
                {
                  position: "right",
                  type: "text",
                  text:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                  date: new Date(),
                },
                {
                  position: "right",
                  type: "text",
                  text: "Dolor sit amet, consectetur adipisicing elit",
                  date: new Date(),
                },
                {
                  position: "left",
                  type: "text",
                  text: "Dolor sit amet, consectetur adipisicing elit",
                  date: new Date(),
                },
                {
                  position: "left",
                  type: "text",
                  text: "Consectetur adipisicing elit",
                  date: new Date(),
                },
                {
                  position: "right",
                  type: "text",
                  text: "Dolor sit amet, consectetur adipisicing elit",
                  date: new Date(),
                },
                {
                  position: "left",
                  type: "text",
                  text: "Consectetur adipisicing elit",
                  date: new Date(),
                },
              ]}
            />
            <div>
              <hr className="chathr" />
              <i className="fa fa-angle-right messageAngle"></i>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MessageBox;
