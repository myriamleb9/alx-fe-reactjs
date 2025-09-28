import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const fetchUserData = async (username) => {
  const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers,
  });

  return response.data;
};
