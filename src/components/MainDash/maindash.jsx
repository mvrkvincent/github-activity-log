import React, { useState } from "react";
import UserDashSub from "./userDashSub";


const MainDash = () =>{

  const [rawUserData, setData] = useState({
    jork41989: [0, 0, 2, 4, 0, 10, 6, 8, 2, 4, 0, 0, 6, 8],
    mvrkvincent: [4, 0, 0, 0, 2, 4, 11, 0, 6, 8, 8, 3, 9, 9],
  });
  const [orgUserData, setOrgData] = useState({});
  let dataSetup = () => {
    if (Object.keys(orgUserData).length === 0) {
      let preData = {...orgUserData};
      Object.keys(rawUserData).forEach((key) => {
        let tempData = {};
        tempData.week2Raw = rawUserData[key].slice(0, 7);
        tempData.week1Raw = rawUserData[key].slice(7, 14);
        let week1Data = dayCount(tempData.week1Raw);
        tempData.week1DayCount = week1Data.dayTotal;
        tempData.week1CommitCount = week1Data.commitCount;
        let week2Data = dayCount(tempData.week2Raw);
        tempData.week2DayCount = week2Data.dayTotal;
        tempData.week2CommitCount = week2Data.commitCount;
        tempData.username = key;
        let total = 0;
        total += dayCalc(tempData.week1DayCount);
        total += dayCalc(tempData.week2DayCount);
        total += commitTotal(tempData.week1CommitCount);
        total += commitTotal(tempData.week2CommitCount);
        tempData.total = total;
        preData[key] = tempData;
      });
      setOrgData(preData)
    } 

  };

    let dayCalc = (num) => {
      if (num > 5) {
        return 25;
      } else {
        return 25 * (num / 7);
      }
    };
    let commitTotal = (num) => {
      if (num > 25) {
        return 25;
      } else {
        return 25 * (num / 25);
      }
    };
  let dayCount = (week) => {
    let commit = 0
    let dayTotal = 0
    week.forEach(day => {
      if(day > 0 ) {
        dayTotal++
        commit = day
      }
    })
    return {dayTotal: dayTotal, commitCount: commit}
  } 

  let userComponents = () => {
    dataSetup();
    let userComps = []
    let i = 0
    Object.keys(orgUserData).forEach(user => {
      userComps.push(<UserDashSub data={orgUserData[user]} key={i} />)
      i++
    })
    return userComps
  }
  return(
    <div className="dashMain">
      {userComponents()}
    </div>
  )
}

export default MainDash;