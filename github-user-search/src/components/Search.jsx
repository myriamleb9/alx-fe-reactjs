import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && (
          <div style={{ marginTop: '1rem' }}>
            <img src={user.avatar_url} alt="Avatar" width={100} />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
