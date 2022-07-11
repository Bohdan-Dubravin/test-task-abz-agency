import axiosget from './axios';
import axios from 'axios';

const getToken = async () => {
  const result = await axiosget.get('/token');

  return result.data.token;
};

const axiousAuth = async () => {
  const token = await getToken();

  return axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    headers: { Token: token },
  });
};

export default axiousAuth;
