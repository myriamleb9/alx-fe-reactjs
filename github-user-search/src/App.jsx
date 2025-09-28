// src/App.jsx
import { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_GITHUB_API_URL;
const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await axios.get(`${apiUrl}/users/${username}`, { headers });
      setUserData(res.data);
    } catch (err) {
      console.error("User not found", err);
      setUserData(null);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={fetchUser}>Search</button>

      {userData && (
        <div style={{ marginTop: "2rem" }}>
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank">GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
