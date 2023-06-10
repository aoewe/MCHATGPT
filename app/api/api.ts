// const BASE_URL = process.env.BASE_URL || "http://69.172.75.129:5000";  // http://69.172.75.129:5000 // http://jk.alcottlhk.cn/5000
const BASE_URL =  "https://jk.alcottlhk.cn:5000"; 
export const api = {
  login: `${BASE_URL}/api/login`, //登录
  register: `${BASE_URL}/api/register`, //注册
  userinfo: `${BASE_URL}/api/userinfo`, //个人信息
  test: `${BASE_URL}/api/test`,         //次数
  ip_status: `${BASE_URL}/api/ip_status`, //ip
  notice: `${BASE_URL}/api/notice`,   //公告
};
   