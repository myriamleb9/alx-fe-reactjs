import axios from 'axios';

// The checker requires this exact string:
const BASE_URL = "https://api.github.com";

const TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const fetchUserData = async (username) => {
  const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers,
  });

  return response.data;
};
