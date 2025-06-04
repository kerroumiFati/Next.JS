import axios from 'axios';

const API_URL = 'http://localhost:4000/Auth'; // Update with your backend URL

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return response.data.token;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default authService;
