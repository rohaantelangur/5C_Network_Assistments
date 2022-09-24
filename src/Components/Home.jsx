import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/AppReducer/action";
import { Followers } from "./Followers";
import {GoVerified} from 'react-icons/go'


function Home() {
  const [input, setinput] = useState("");
  const [userName, setuserName] = useState("");
  const [ShowFollowers, setShowFollowers] = useState(false);
  const Navigater = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Data);
  console.log(state, "state");

  const handleSubmit = () => {
    console.log(input);
    dispatch(getData(input));
  };

  const handleFollowersBtn = (e,item) => {
    setuserName(item.owner.login);
    setShowFollowers(true);
  };


  return (
    <div className="mainDiv">
      <div className="inputDiv">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Search name"
        />
        <button onClick={handleSubmit} className="btn">
          Search
        </button>
      </div>
      <div className={ShowFollowers ? "popupDivShow" : "popupDivHide"}>
        <div className="close-btn-div">
          <button onClick={() => setShowFollowers(false)} className="btn">
            X
          </button>
        </div>
        <Followers setShowFollowers={setShowFollowers} userName={userName} />
      </div>
      <div className={ShowFollowers ? "displayData blur" : "displayData"}>
        {state?.map((item, index) => (
          <div
            key={index}
            className="parent"
            >
            <div className="ImageDiv">
              <img src={item.owner.avatar_url} alt={item.login}
              onClick={(e) => {
              Navigater(`/reps_details/${item.id}`)
              }}
               />
            </div>
            <div className="resDetailsDiv">
              <p className="repsName">{item.name} <GoVerified color="green"/></p>
              <p className="repsDescription">{item.description}</p>
            </div>
            <div>
              <button onClick={(e)=>handleFollowersBtn(e,item)} className="btn">
                Followers
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
