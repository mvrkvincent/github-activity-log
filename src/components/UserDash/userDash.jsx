import React from "react";
import "./userDash.css"

const UserDash = (state) =>{

  return (
    <div className="userDashMain">
      <p>{state.data.username}</p>
      <div>
        <div>
          <p>Week 1</p>
        </div>
        <div>
          <p>Week 2</p>
        </div>
      </div>
    </div>
  );
}

export default UserDash