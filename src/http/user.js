import request from "@/utils/request";
export default {
   //登录
  loginRequest(params) {
    return request({
      url: `/login/verify-code`,
      method: "post",
      data: params,
    });
  },

   //获取手机验证码
  loginCodeRequest(params) {
    return request({
      url: `/login/sent-code`,
      method: "post",
      data: params,
    });
  },
  //获取用户信息
  userInfoRequest(params) {
    return request({
      url: `/admin/user/getLoginUserInfo`,
      method: "post",
      data: params,
    });
  },
  logoutRequest(params) {
    return request({
      url: `/admin/user/logout`,
      method: "post",
      data: params,
    });
  },
};
