import axios from 'axios';
import {baseUrl, requestTimeout} from '../constant/Config';

export const getRequest = async (endPoint: string) => {
  console.log('api url', baseUrl + endPoint);
  let _baseUrl = baseUrl;
  const response = await axios({
    url: `${_baseUrl}${endPoint}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Connection: 'close',
      Authorization: 'Bearer ' + global.authToken,
    },
    timeout: requestTimeout,
  });
  return response;
};

export const postRequest = async (endPoint: string, data: any) => {
  console.log('api url', baseUrl + endPoint);
  const response = await axios({
    url: `${baseUrl}${endPoint}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + global.authToken,
    },
    data,
    timeout: requestTimeout,
  });

  return response;
};
