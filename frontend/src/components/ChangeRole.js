import React, { useState } from "react";

function ChangeRole() {
  const [userRole, setUserRole] = useState("");
  return (
    <div>
      <form className="role-frm">
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value={"select"}>-select-</option>
          <option value={"subscriber"}>Subscriber</option>
          <option value={"admin"}>Admin</option>
          <option value={"suspended"}>Suspended</option>
        </select>
        <button>OK</button>
      </form>
    </div>
  );
}

export default ChangeRole;
