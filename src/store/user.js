import { defineStore } from "pinia";
import userApi from "@/http/user.js";
import * as bootstrap from "bootstrap";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogin: false,
      userInfo: {
        
      },
    };
  },

  actions: {
    requestLogin(params = {}) {
      return new Promise((resolve, reject) => {
        userApi.loginRequest(params).then((res) => {
          if (res.respCode == 200) {
            this.isLogin = true;
            this.userInfo = res.data?JSON.parse(res.data):{}
            resolve(res);
          } else {
            
            reject(res);
          }
        });
      });
    },
    requestLoginCode(params = {}) {
      return new Promise((resolve, reject) => {
        userApi.loginCodeRequest(params).then((res) => {
          
          if (res.respCode == 200) {
            resolve(res);
          } else {
            reject(res);
            
          }
        });
      });
    },
    requestUserInfo(params = {}) {
      userApi.userInfoRequest(params).then((res) => {
        if (res.code == 200) {
          this.userInfo = res.data;
        }
      });
    },
    requestLogout(params = {}) {
      const myModal = new bootstrap.Modal(
        document.getElementById("loginModal"),
        { keyboard: false }
      );
      myModal.hide();
      this.$reset();
      return;
      return userApi.logoutRequest(params).then((res) => {
        if (res.code == 200) {
          const myModal = new bootstrap.Modal(
            document.getElementById("loginModal"),
            { keyboard: false }
          );
          myModal.hide();
          this.$reset();
        }
      });
    },
  },
  persist: true,
});
