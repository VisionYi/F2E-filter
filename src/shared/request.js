import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

// axios 最初始的設定只能單獨設置才有用
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = TIMEOUT;

// 封裝自己的額外設定
const otherConfig = {
  onSuccess: {
    onlyReturnData: true,
  },
  onError: {
    redirectPath: null,
  },
};

// 設定所有的預設內容值
axios.defaults = {
  ...axios.defaults,
  ...otherConfig,
};

// 發出 request 請求後，回傳 response 成功時的資料操作
function onSuccess(axiosThis) {
  const { onlyReturnData } = axiosThis.defaults.onSuccess;

  return res => (onlyReturnData ? res.data : res);
}

// 發出 request 請求後，請求失敗、網路 HTTP 問題、回傳錯誤訊息 status code & message error ...等等
function onError(axiosThis) {
  const { redirectPath } = axiosThis.defaults.onError;

  return (error) => {
    if (redirectPath !== null) {
      // (可新增) ... 頁面轉跳
    }

    // 當 error 有 response 參數內容時執行以下
    if (error.response) {
      // (可新增) 頁面跳出錯誤訊息框
      // (可新增) 隨著 status code 轉跳不同頁面設定...等等

      const { status, data, headers } = error.response;
      console.error('Status:', status);
      console.error('Data:', data);
      console.error('Headers:', headers);
      return Promise.reject(error.response);
    }

    // 當 error 不明時，必定會有 error.message
    console.error('Error Message:', error.message);
    return Promise.reject(error);
  };
}

// response 捕獲
axios.interceptors.response.use(onSuccess(axios), onError(axios));

// 新方法，可以修改預設值，創造另一個實例使用
axios.createNew = function createNew(config) {
  const newAxios = axios.create({
    ...otherConfig,
    ...config,
  });
  newAxios.interceptors.response.use(onSuccess(newAxios), onError(newAxios));
  return newAxios;
};

export default axios;
