import React, { useState, useEffect } from "react";
import { ChatItem } from "react-chat-elements";
import axios from "axios";
import { history } from "..";

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
    geo: any;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const HomePage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get(`https://panorbit.in/api/users.json`).then((res) => {
      const users = res.data;
      setUserList(users);
    });
  }, []);

  const userClick = (u: any) => {
    if (u != null) {
      history.push(`/profile/${u.id}`);
    }
  };

  const displayUsers = () => {
    var users = [];
    if (userList != null) {
      users = userList["users"];
    }
    return (
      users != null &&
      users.length > 0 &&
      // eslint-disable-next-line array-callback-return
      users.map((u: UserState) => (
        <div>
          <ChatItem
            avatar={u.profilepicture}
            alt={null}
            title={u.name}
            subtitle={null}
            onClick={() => userClick(u)}
            scroll={true}
          />
        </div>
      ))
    );
  };

  return (
    <div className="mainDivBody">
      <div className="container">
        <div className="headDiv">
          <h1 style={{ textAlign: "center" }}>Select an account</h1>
          <div className="userList">{displayUsers()}</div>
        </div>
      </div>
      <svg
        className="svgContainer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,128C840,85,960,43,1080,26.7C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
export default HomePage;
