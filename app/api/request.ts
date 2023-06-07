import { NextApiRequest, NextApiResponse } from "next";
import { api } from "./api";

console.log(api);

const request = (url: string, method: string, data: object): Promise<any> => {
  const info = localStorage.getItem("USERINFO") || "is no data";
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      //   uid: info,
      //   token: info,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.code === 700) {
        throw new Error("请重新登录");
      } else if (data.code === 0) {
        return data;
      } else {
        throw new Error(data.msg);
      }
    })
    .catch((error) => {
      console.error(error);
      throw new Error("系统错误");
    });
};

const login = (data: object): Promise<any> => {
  return request(api.login, "post", data);
};

const register = (data: object): Promise<any> => {
  return request(api.register, "post", data);
};

const userinfo = (data: object): Promise<any> => {
  return request(api.userinfo, "post", data);
};

const test = (data: object): Promise<any> => {
  return request(api.test, "post", data);
};

const ip_status = (data: object): Promise<any> => {
  return request(api.ip_status, "post", data);
};

const notice = (data: object): Promise<any> => {
  return request(api.notice, "post", data);
};

export default {
  login,
  register,
  userinfo,
  test,
  ip_status,
  notice,
};
