import {BASE_API_SERVICES} from '../../utils/constants';
import axios from 'axios';
import {Notification} from '../../components/notification/Notification';

export async function addProgressApi(progressUser, user) {
  try {
    const userObj = user;
    const val = validateUpdatedProgress(progressUser, user);
    let response = false;

    if (val) {
      response = await axios.post(`${BASE_API_SERVICES}/creatorProgress`, {
        email: userObj.email,
        mod1:
          progressUser.module === '1'
            ? progressUser.percentage
            : userObj.progress.mod1,
        mod2:
          progressUser.module === '2'
            ? progressUser.percentage
            : userObj.progress.mod2,
        mod3:
          progressUser.module === '3'
            ? progressUser.percentage
            : userObj.progress.mod3,
        mod4:
          progressUser.module === '4'
            ? progressUser.percentage
            : userObj.progress.mod4,
        mod5:
          progressUser.module === '5'
            ? progressUser.percentage
            : userObj.progress.mod5,
      });

      return true;
    } else return false;
  } catch (error) {
    if (error.request) {
      return Notification('Error de conexión: Intentre mas tarde', 'error');
    } else {
      throw error;
    }
  }
}

async function validateUpdatedProgress(newProgress, oldProgress) {
  try {
    if (oldProgress.progress.email === false) {
      return true;
    } else if (newProgress.module === '1') {
      return newProgress.percentage > oldProgress.progress.mod1 ? true : false;
    } else if (newProgress.module === '2') {
      return newProgress.percentage > oldProgress.progress.mod2 ? true : false;
    } else if (newProgress.module === '3') {
      return newProgress.percentage > oldProgress.progress.mod3 ? true : false;
    } else if (newProgress.module === '4') {
      return newProgress.percentage > oldProgress.progress.mod4 ? true : false;
    } else if (newProgress.module === '5') {
      return newProgress.percentage > oldProgress.progress.mod5 ? true : false;
    } else return false;
  } catch (error) {
    throw error;
  }
}

export async function getProgressUserAPi(email) {
  try {
    return await axios
      .get(`${BASE_API_SERVICES}/getDataUser/${email}`)
      .then(response => {
        return response.data;
      });
  } catch (error) {
    throw error;
  }
}
