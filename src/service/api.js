import axios from 'axios';

axios.defaults.baseURL = 'https://api.opendota.com/api';

export const getHeroStats = async () => {
  try {
    const response = await axios.get('/heroStats');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
