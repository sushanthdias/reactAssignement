import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import ToDo from "./ToDo";
import { Avatar } from "react-chat-elements";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import { history } from "../index";
import { Collapse, Button } from "antd";
import map from "../assets/map1.jpeg";
import useModal from "../components/useModal";
import Modal from "../components/Modal";
const { Panel } = Collapse;

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
  const [users, setUsers] = useState<UserState | null>(null);
  const [headerName, setHeaderName] = useState("");
  const { isShowing, toggle } = useModal();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://panorbit.in/api/users.json`).then((res) => {
      const users = res.data;
      const list = users["users"];
      var id = props.match.params.id;
      setUsers(list);
      list.map((u: UserState) => {
        if (id && u && id == u.id) {
          setUserList(u);
          sidebarClick("Profile");
        }
      });
    });
  }, []);

  const sidebarClick = (str?: string) => {
    if (str != "" && str != undefined) {
      setHeaderName(str);
    }
    // if (str == "Posts") {
    //   history.push("/Posts");
    // }
  };
  return (
    /* Main div */
    <div className="containerBody">
      <div className="sidebar">
        <ul>
          <li>
            <a onClick={() => sidebarClick("Profile")} href="#">
              Profile
            </a>
          </li>
          <hr />
          <li>
            <a onClick={() => sidebarClick("Posts")} href="#">
              Posts
            </a>
          </li>
          <hr />
          <li>
            <a onClick={() => sidebarClick("Gallery")} href="#">
              Gallery
            </a>
          </li>
          <hr />
          <li>
            <a onClick={() => sidebarClick("ToDo")} href="#">
              ToDo
            </a>
          </li>
        </ul>
      </div>
      <div className="contentHeader">
        <p className="headerLeft">
          {headerName != "" && headerName != undefined && headerName}
        </p>
        <div className="headerRight">
          <Avatar
            src={userList?.profilepicture}
            alt={"logo"}
            size="small"
            type="circle"
          />
          <Button onClick={toggle} className="userName">
            {userList?.name}
          </Button>
        </div>
        <hr className="hrLine" />
      </div>
      <div className="content">
        {headerName == "Posts" ? <Posts /> : ""}
        {headerName == "Gallery" ? <Gallery /> : ""}
        {headerName == "ToDo" ? <ToDo /> : ""}
        {headerName == "Profile" ? (
          <div>
            <div className="leftDiv">
              {/* left Side Split */}
              <div className="fullSizeAvatar">
                <img className="avatar" src={userList?.profilepicture} />
              </div>
              <table className="tableContainer">
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
                    style={{ paddingLeft: "85px", paddingBottom: "0px" }}
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
              </table>
            </div>
            <div className="rightDiv">
              <div>
                {!open ? (
                  <div onClick={() => setOpen(true)} className="reactChatbox">
                    <i className="fa fa-comment"></i>
                    <span> Chats</span>
                    <i className="fa fa-angle-up"></i>
                  </div>
                ) : null}

                {open ? (
                  <div className="chatOpenContainer">
                    <div
                      onClick={() => setOpen(false)}
                      className="reactChatboxOpen"
                    >
                      <i className="fa fa-comment"></i>
                      <span> Chats</span>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="chatContainer">
                      <h3>users</h3>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* right Side Split */}
              <table>
                <tr>
                  <td colSpan={3}>Address</td>
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
                <tr>
                  <td colSpan={3}>
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
              </table>
              <Modal
                users={users}
                user={userList}
                isShowing={isShowing}
                hide={toggle}
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
