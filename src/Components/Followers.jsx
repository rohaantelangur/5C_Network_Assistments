import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Followers = ({ userName }) => {
  const [Followers, setFollowers] = useState([]);
  const Navigater = useNavigate();

  const FetchFollowersData = (userName) => {
    axios.get(`https://api.github.com/users/${userName}/followers`).then((res) => {
    //   console.log(res.data);
      setFollowers(res.data);
    });
  };

  useEffect(() => {
    FetchFollowersData(userName);
  }, [userName]);
  return (
    <div className="FollowersDiv">
        {Followers?.map((item, index) => (
          <div key={index} className="parent">
            <div>
              <img src={item.avatar_url} alt={item.login} />
            </div>
            <div>
              <p>{item.login}</p>
              <p></p>
            </div>
            <div>
                <button className="btn" onClick={()=>{Navigater(`/follower_repos/${item.login}`)}}>Go To Repos</button>
            </div>
          </div>
        ))}
      </div>
  )
}
