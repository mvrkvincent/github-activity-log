import React from "react";
import "./userDash.css"

const UserDash = (state) =>{

  return (
    <div className="userDashMain">
      <p>{state.data.username}</p>
      <div className="weeksDiv">
        <div className="weekDiv">
          <p>Week 1</p>
          <div className="weekDataDiv">
            <div>
              <p>Commits</p>
              <p>{state.data.week1CommitCount}</p>
            </div>
            <div>
              <p>Active Days</p>
              <p>{state.data.week1DayCount}</p>
            </div>
          </div>
        </div>
        <div className="weekDiv">
          <p>Week 2</p>
          <div className="weekDataDiv">
            <div>
              <p>Commits</p>
              <p>{state.data.week2CommitCount}</p>
            </div>
            <div>
              <p>Active Days</p>
              <p>{state.data.week2DayCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDash