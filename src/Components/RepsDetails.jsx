import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {GoVerified} from 'react-icons/go'

export const RepsDetails = () => {
  const { id } = useParams();
  const [currentRep, setcurrentRep] = useState({});
  const Data = useSelector((state) => state.Data);
  console.log(currentRep);

  useEffect(() => {
    const CurrentData = Data.filter((item) => 
      item.id==id
    );
    setcurrentRep(CurrentData[0])
  }, []);

  return (
  <div className="repsMainDive">
    <div className="repsMainDive1">
        <img src={currentRep?.owner?.avatar_url} alt="" />
        <div className="repsMainDive11">
<p><GoVerified color="green"/> Verified by Github</p>
<p>Github confirms that app meets the reqirements for verification</p>
<p>Categories</p>
<span>Codereview</span>
<span>IDEs</span>
<span>Free</span>
<span>Paid</span>
        </div>


    </div>

    <div className="repsMainDive2">
        <p>Application</p>
        <h3>{currentRep?.name}</h3>
        <button className="btn">Go To Rep</button>
        <p>{currentRep?.description}</p>


    </div>
  </div>
  );
};
