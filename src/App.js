import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Followers } from "./Components/Followers";
import { RepsDetails } from "./Components/RepsDetails";
import { FollowersRepsList } from "./Components/FollowersRepsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reps_details/:id" element={<RepsDetails />} />
      <Route path="/follower_repos/:userName" element={<FollowersRepsList />} />
      <Route path="/followers/:userName" element={<Followers />} />
    </Routes>
  );
}

export default App;
