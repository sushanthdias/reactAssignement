import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import ToDo from "./ToDo";
import { Avatar } from "react-chat-elements";
import Posts from "./Posts";
import Modal from "../components/Modal";
import { Button } from "antd";
import MessageBox from "../components/MessageBox";

interface UserState {
  id: number;
  name: string;
  username: string;
  email: string;
  profilepicture: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: any;
      lng: any;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Profile = (props: any) => {
  const [userList, setUserList] = useState<UserState | null>(null);
  const [users, setUsers] = useState([]);
  const [headerName, setHeaderName] = useState("");
  const [iconClass, setIconClass] = useState("iconContainer");
  const [isShowing, setIsShowing] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSingleChat, setShowSingleChat] = useState(false);
  const [chatSelectedUser, setChatSelectedUser] = useState<UserState | null>(
    null
  );

  useEffect(() => {
    axios.get(`https://panorbit.in/api/users.json`).then((res) => {
      const users = res.data;
      const list = users["users"];
      var id = props.match.params.id;
      setUsers(users);
      // eslint-disable-next-line array-callback-return
      list.map((u: UserState) => {
        // eslint-disable-next-line
        if (id && u && id == u.id) {
          setUserList(u);
          sidebarClick("Profile");
        }
      });
    });
    // eslint-disable-next-line
  }, []);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const userClick = (u: UserState) => {
    setShowSingleChat(true);
    setChatSelectedUser(u);
  };

  const triggerHide = () => {
    setShowSingleChat(false);
  };
  const sidebarClick = (str?: string) => {
    // eslint-disable-next-line
    if (str != "" && str != undefined) {
      setHeaderName(str);
      // eslint-disable-next-line
      if (str == "Profile") {
        setIconClass("iconContainerProfile");
        // eslint-disable-next-line
      } else if (str == "Posts") {
        setIconClass("iconContainerPosts");
        // eslint-disable-next-line
      } else if (str == "Gallery") {
        setIconClass("iconContainerGallery");
        // eslint-disable-next-line
      } else if (str == "ToDo") {
        setIconClass("iconContainerToDo");
      }
    }
  };
  var AllUsers = [];
  // eslint-disable-next-line
  if (users != []) {
    AllUsers = users["users"];
  }
  return (
    /* Main div */
    <div className="containerBody">
      <div className="sidebar">
        <div>
          <div className={iconClass}>
            <i className="fa fa-angle-right"></i>
            <svg
              //viewBox="0 0 500 150"
              viewBox="0 0 307 398"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M179,78h-36.5C73.19,78,17,134.19,17,203.5v0C17,272.81,73.19,329,142.5,329h43.84
              c28.57,3.61,50.66,27.98,50.66,57.52V20C237,52.03,211.03,78,179,78z"
                // d="M477.09,12.14 C418.96,16.08 419.52,134.50 474.83,135.49 L500.00,150.00 L500.00,0.00 Z"
                style={{ stroke: "none", fill: "white" }}
              ></path>
            </svg>
          </div>
        </div>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => sidebarClick("Profile")} href="#">
              Profile
            </a>
          </li>
          <hr className="sidebarLine" />
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => sidebarClick("Posts")} href="#">
              Posts
            </a>
          </li>
          <hr className="sidebarLine" />
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => sidebarClick("Gallery")} href="#">
              Gallery
            </a>
          </li>
          <hr className="sidebarLine" />
          <li>
            {/* eslint-disable-next-line */}
            <a onClick={() => sidebarClick("ToDo")} href="#">
              ToDo
            </a>
          </li>
        </ul>
      </div>
      <div className="contentHeader">
        <p className="headerLeft">
          {/* eslint-disable-next-line */}
          <span style={{ fontSize: "24px" }}>
            {/* eslint-disable-next-line */}
            {headerName != "" && headerName != undefined && headerName}{" "}
          </span>
        </p>
        <div className="headerRight">
          <Avatar
            src={userList?.profilepicture}
            alt={"logo"}
            size="small"
            type="circle"
          />
          <Button onClick={() => toggle()} className="userName">
            {userList?.name}
          </Button>
        </div>
        <hr className="hrLine" />
      </div>
      <div onClick={() => setIsShowing(false)} className="content">
        {/* eslint-disable-next-line */}
        {headerName == "Posts" ? <Posts /> : ""}
        {/* eslint-disable-next-line */}
        {headerName == "Gallery" ? <Gallery /> : ""}
        {/* eslint-disable-next-line */}
        {headerName == "ToDo" ? <ToDo /> : ""}
        {/* eslint-disable-next-line */}
        {headerName == "Profile" ? (
          <div>
            <div className="leftDiv">
              {/* left Side Split */}
              <div className="fullSizeAvatar">
                <img
                  alt="logo"
                  className="avatar"
                  src={userList?.profilepicture}
                />
              </div>
              <table className="tableContainer">
                <thead></thead>
                <tbody>
                  <tr>
                    <td
                      className="userFullName"
                      style={{ paddingLeft: "75px" }}
                      colSpan={3}
                    >
                      {userList?.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Username</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.username}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">e-mail</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.email}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Phone</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.phone}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Website</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.website}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <hr className="hrLine" />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ paddingLeft: "95px", paddingBottom: "0px" }}
                      colSpan={3}
                    >
                      Company
                    </td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Name</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.company.name}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">catchphrase</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.company.catchPhrase}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">bs</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.company.bs}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rightDiv">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      {!open ? (
                        <div
                          onClick={() => setOpen(true)}
                          className="reactChatbox"
                        >
                          <i className="fa fa-comment"></i>
                          <span> Chats</span>
                          <i className="fa fa-angle-up"></i>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {open ? (
                        <div>
                          <table>
                            <thead></thead>
                            <tbody>
                              <tr className="ChatWrapper">
                                <td className="c1">
                                  <div
                                    onClick={() => setOpen(false)}
                                    className="reactChatboxOpen"
                                  >
                                    <i className="fa fa-comment"></i>
                                    <span> Chats</span>
                                    <i className="fa fa-angle-down"></i>
                                  </div>
                                </td>
                                <td className="c2">
                                  <div className="chatContainer chatScroll">
                                    {AllUsers &&
                                      AllUsers.map((u: UserState) => (
                                        <div
                                          onClick={() => userClick(u)}
                                          className="listWrapper"
                                        >
                                          <span>
                                            <img
                                              alt=""
                                              className="userImg"
                                              src={u?.profilepicture}
                                            />
                                          </span>
                                          <span className="userText">
                                            {u?.name}
                                          </span>
                                          <img
                                            className="userCircle"
                                            src={require("../assets/circle.png")}
                                            alt=""
                                          />
                                        </div>
                                      ))}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* right Side Split */}
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td
                      style={{ color: "#9A9A9A", fontSize: "16px" }}
                      colSpan={3}
                    >
                      Address:
                    </td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Street</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.address.street}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Suite</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.address.suite}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">City</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.address.city}</td>
                  </tr>
                  <tr>
                    <td className="userTitleLeft">Zipcode</td>
                    <td className="userTitleLeft">:</td>
                    <td>{userList?.address.zipcode}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      {/* eslint-disable-next-line */}
                      <img src={require("../assets/map.PNG")} alt="no image" />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={3}
                      style={{ textAlign: "right", fontSize: "10px" }}
                    >
                      <span
                        className="userTitleLeft"
                        style={{ fontSize: "10px" }}
                      >
                        Lat :
                      </span>
                      {userList?.address.geo.lat}
                      <span
                        className="userTitleLeft"
                        style={{ fontSize: "10px", paddingLeft: "10px" }}
                      >
                        {" "}
                        Long :
                      </span>
                      {userList?.address.geo.lng}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Modal
                users={users}
                user={userList}
                isShowing={isShowing}
                hide={toggle}
              />
              <MessageBox
                showChat={showSingleChat}
                user={chatSelectedUser}
                clickMe={triggerHide}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
