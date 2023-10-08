import {BASE_API_SERVICES} from '../../utils/constants';
import axios from 'axios';

export async function loginApi(email, password) {
  try {
    const result = await axios.post(`${BASE_API_SERVICES}/login`, {
      email: email,
      password: password,
    });

    console.log(result);
    if (result.data.email) {
      return result;
    } else return [];
  } catch (error) {
    if (error.request) {
    } else {
      throw error;
    }
  }
}

export async function createUserApi(user) {
  try {
    let response = await axios.post(`${BASE_API_SERVICES}/signup`, {
      email: user.email,
      password: user.password,
      user: user.user,
      school: user.school,
    });
    console.log(response);
    return response;
  } catch (error) {
    if (error.request) {
    } else {
      throw error;
    }
  }
}
