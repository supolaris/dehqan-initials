import {ApiNames} from '../constant/ApiNames';
import {IHomeDataResponse} from '../@type/ApiResponses';
import {getRequest, postRequest} from './NetworkServices';

export const getHomeDataService = async () => {
  let {data: response}: {data: IHomeDataResponse} = await getRequest(
    ApiNames.testHome,
  );
  return response;
};

export const postHomeDataService = async (data: any) => {
  let {data: response}: {data: IHomeDataResponse} = await postRequest(
    ApiNames.testHome,
    data,
  );
  return response;
};

export const postHomeParameterService = async (
  testParameter: string,
  data: any,
) => {
  const completeEndpoint = `${ApiNames.testHome}?testParameter=${testParameter}`;
  let {data: response}: {data: IHomeDataResponse} = await postRequest(
    completeEndpoint,
    data,
  );
  return response;
};
