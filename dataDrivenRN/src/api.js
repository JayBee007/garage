import axios from 'axios';

const API_HOST =    'https://bakesaleforgood.com';
const API_DEALS =   '/api/deals';

export default {
  async getInitialDeals() {
    try {
      const response = await axios.get(API_HOST+API_DEALS);
      return response.data;
    } catch (error) {
      // console.log(error);
    }
  }
};
