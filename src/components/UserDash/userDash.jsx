import React from "react";
import "./userDash.css"

const UserDash = (state) =>{

  let arrMaker = (arr) => {
    
    let output = []
    arr.forEach(day=>{
      let color
      if(day >= 5){
        color = { backgroundColor: "rgba(0, 128, 0, 0.493)" };
      } else if ( day < 5 && day >= 3){
        color = { backgroundColor: "rgba(255, 255, 0, 0.466)" };
      } else {
        color = { backgroundColor: "rgba(255, 0, 0, 0.602)" };
      }
      output.push(<div style={color} className="dayArrEl">{day}</div>)
    })
    return output
  }

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
          <div className="dayArr">{arrMaker(state.data.week1Raw)}</div>
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
          <div className="dayArr">{arrMaker(state.data.week2Raw)}</div>
        </div>
      </div>
    </div>
  );
}

export default UserDash