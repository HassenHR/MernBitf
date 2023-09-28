import React from "react";
import Search from "../components/Search";
import PageMenu from "../components/pageMenu/PageMenu";
import ChangeRole from "../components/ChangeRole";

function UserList() {
  return (
    <div className="center">
      <PageMenu />
      <div className="user-bx">
        <div>
          <h2>Users</h2>
        </div>
        <Search />
      </div>

      <section className="user-list-container">
        <div>
          <h1>Name:</h1>
        </div>
        <div>
          <h1>Email:</h1>
        </div>
        <div>
          <h1>Role:</h1>
          <ChangeRole />
        </div>
        <div>
          <h1>Action:</h1>
          <button className="rm">remove</button>
        </div>
      </section>
    </div>
  );
}

export default UserList;
