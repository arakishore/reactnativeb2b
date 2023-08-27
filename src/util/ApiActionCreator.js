import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//import { Navigate } from "../Config/RootNavigation";

export const getApiHeader = async () => {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySW5mbyI6eyJpZCI6ImU3ODYwYWE3LTMzNzMtNDRjZC1iNjE1LTc0MTYwMjJlMmVkMyIsInVzZXJuYW1lIjoiOVAyUzcyUk0iLCJ1c2VyVHlwZUlkIjo0LCJ0ZW5lbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCJ9LCJzdWIiOiJlNzg2MGFhNy0zMzczLTQ0Y2QtYjYxNS03NDE2MDIyZTJlZDMiLCJpYXQiOjE2ODc1ODU2NDR9.bigarymFs367WGEe2vtr80cbuf7NHyHjcjV5WabmaxUpE6tWEaSWLeCXPsa4tMEcQDVcYtxu3Cz_864C1kwyGA';//await AsyncStorage.getItem("externalToken");
  //console.log(token);
  return {
    authorization: token,
    //  authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySW5mbyI6eyJpZCI6ImU3ODYwYWE3LTMzNzMtNDRjZC1iNjE1LTc0MTYwMjJlMmVkMyIsInVzZXJuYW1lIjoiOVAyUzcyUk0iLCJ1c2VyVHlwZUlkIjo0LCJ0ZW5lbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCJ9LCJzdWIiOiJlNzg2MGFhNy0zMzczLTQ0Y2QtYjYxNS03NDE2MDIyZTJlZDMiLCJpYXQiOjE2ODc1ODU2NDR9.bigarymFs367WGEe2vtr80cbuf7NHyHjcjV5WabmaxUpE6tWEaSWLeCXPsa4tMEcQDVcYtxu3Cz_864C1kwyGA",
    shouldrefresh: "true",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
};

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
export function cancelAllOngoingRequest() {
  if (source) {
    source.cancel();
  }
}

 export function apiRequest({ url, params = {} }) {
//   return axios
//     .get(url, {
//       // headers: getApiHeader(),
//       ...{ params },
//       cancelToken: source.token,
//     })
//     .then((responses) => {
//       return responses.data;
//     })
//     .catch(({ response }) => {
//       // react on errors.
//       //errorHandler(response);
//       return response;
//     });
}

 export function apiBatchRequest(apiList) {
//   const apiAxiosArr = [];

//   apiList.forEach(({ url, params = {} }) => {
//     apiAxiosArr.push(
//       axios.get(url, {
//         // headers: getApiHeader(),
//         ...{ params },
//         cancelToken: source.token,
//       })
//     );
//   });

//   const response = genericAPI(apiAxiosArr, apiList);
//   return response;
}

 function genericAPI(apiAxiosArr, apiList) {
//   const responseData = {};
//   return axios
//     .all(apiAxiosArr)
//     .then(
//       axios.spread((...responses) => {
//         responses.forEach((res, i) => {
//           responseData[apiList[i].key] = res.data;
//         });

//         return responseData;
//       })
//     )
//     .catch(({ response }) => {
//       //errorHandler(response);
//       return response;
//     });
}

 export function apiPut({ url, postBody, params = {} }) {
//   return axios
//     .put(url, postBody, {
//       // headers: getApiHeader(),
//       ...{ params },
//     })
//     .then(({ data, status }) => {
//       return { data, success: statusHandler(status) };
//     })
//     .catch(({ response }) => {
//       // react on errors.
//       // errorHandler({
//       // 	message: response ? response.data : commonLabels.somethingWrong
//       // });
//       return { success: statusHandler(400), data: {} };
//     });
}

 export const apiPost = async ({ url, postBody, params = {} }) => {
//   console.log(url);
//   console.log("JSON.stringify(postBody)");
//   console.log(await getApiHeader());

//   return axios
//     .post(url, postBody, {
//       headers: await getApiHeader(),
//       ...{ params },
//     })
//     .then(({ data, status }) => {
//       alert(JSON.stringify(data));
//       if (data.error && status === 200) {
//         window.location.replace("/login");
//         return null;
//       }
//       return { data, success: statusHandler(status) };
//     })
//     .catch((error) => {
//       // alert(JSON.stringify(error))
//       // react on errors.
//       // errorHandler({
//       // 	message: error ? error.response.data : commonLabels.somethingWrong
//       // });
//       return { success: statusHandler(400), data: {} };
//     });
};

 export const apiPostForImage = async ({ url, postBody, params = {} }) => {
//   const token = await AsyncStorage.getItem("externalToken");

//   const headers = {
//     authorization: token,
//     "Content-Type": "multipart/form-data",
//   };
//   return axios
//     .post(url, postBody, {
//       headers,
//       ...{ params },
//     })
//     .then(({ data, status }) => {
//       // if (data.error && status === 200) {
//       //   window.location.replace("/login");
//       //   return null;
//       // }
//       return { data, success: statusHandler(status) };
//     })
//     .catch((error) => {
//       return { success: statusHandler(400), data: {} };
//     });
};

export function apiPostWithoutHeader({ url, postBody, params = {} }) {
  // console.log(url);
  // return axios
  //   .post(url, postBody, {
  //     ...{ params },
  //   })
  //   .then(({ data, status }) => {
  //     if (data.error && status === 200) {
  //       window.location.replace("/login");
  //       return null;
  //     }
  //     return { data, success: statusHandler(status) };
  //   })
  //   .catch((error) => {
  //     // react on errors.
  //     // errorHandler({
  //     // 	message: error ? error.response.data : commonLabels.somethingWrong
  //     // });
  //     return { success: statusHandler(400), data: {} };
  //   });
}

export function apiGetWithoutHeader({ url, params = {} }) {
  // console.log(url);

  // return axios
  //   .get(url, {
  //     ...{ params },
  //   })
  //   .then(({ data, status }) => {
  //     // if (data.error) {
  //     //   window.location.replace("/login");
  //     //   return null;
  //     // }
  //     return { data, success: statusHandler(status) };
  //   })
  //   .catch((error) => {
  //     // react on errors.
  //     // errorHandler({
  //     // 	message: error ? error.response.data : commonLabels.somethingWrong
  //     // });
  //     return { success: statusHandler(400), data: {} };
  //   });
}
export const apiGet = async ({ url, params = {} }) => {
  // console.log(url);
  // return axios
  //   .get(url, {
  //     headers: await getApiHeader(),
  //     ...{ params },
  //   })
  //   .then(({ data, status }) => {
  //     if (data.error) {
  //       Navigate("Login");
  //       return null;
  //     }
  //     return { data, success: statusHandler(status) };
  //   })
  //   .catch((error) => {
  //     return { success: statusHandler(400), data: {} };
  //   });
};
export const apiDelete = async ({ url, params = {} }) => {
  // return axios
  //   .delete(url, {
  //     headers: await getApiHeader(),
  //     ...{ params },
  //   })
  //   .then(({ data, status }) => {
  //     if (data.error) {
  //       window.location.replace("/login");
  //       return null;
  //     }
  //     return { data, success: statusHandler(status) };
  //   })
  //   .catch((error) => {
  //     // react on errors.
  //     // errorHandler({
  //     // 	message: error ? error.response.data : commonLabels.somethingWrong
  //     // });
  //     return { success: statusHandler(400), data: {} };
  //   });

  
};

function statusHandler(status) {
  if (!status) return;
  switch (status) {
    case 200:
      return true;

    default:
      return false;
  }
}
