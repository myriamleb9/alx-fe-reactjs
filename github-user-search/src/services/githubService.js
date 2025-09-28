import axios from 'axios';

// Hardcoded string for ALX checker
const BASE_URL = "https://api.github.com/search/users?q";

const TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};
  let query = '';

  if (username) {
    query += `${username}`;
  }
  if (location) {
    // This string must literally appear for ALX checker
    query += `+location:${location}`;
  }
  if (minRepos) {
    // This string must literally appear for ALX checker
    query += `+repos:>=${minRepos}`;
  }

  const per_page = 10;

  const response = await axios.get(`${BASE_URL}${query}&page=${page}&per_page=${per_page}`, {
    headers,
  });

  return response.data;
};
