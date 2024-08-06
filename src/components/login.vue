<template>
  <div
    class="modal fade"
    id="loginModal"
    :data-bs-keyboard="false"
    :data-bs-backdrop="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">登录</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="step == 1">
            <div class="input-group">
              <input
                type="tel"
                class="form-control form-control-lg"
                placeholder="手机号"
                v-model="form.phone"
                @blur="phoneInputBlur"
              />
              <button
                type="button"
                class="btn btn-outline-primary"
                :disabled="
                  (!form.isVerifyPass && errorCodeNum >= 3) || !form.phone
                    ? true
                    : false
                "
                @click="getCodeThrottle"
              >
                发送验证码
              </button>
            </div>
            <div class="mt-4" v-if="errorCodeNum >= 3">
              <dragVerify v-model:value="form.isVerifyPass"></dragVerify>
            </div>
          </div>
          <div v-if="step == 2">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="输入4位验证码"
              v-model="form.code"
              @input="confirmLogin"
            />
           
          </div>

          <div
            :class="[
              error.type == 'success' ? 'valid-feedback' : 'invalid-feedback',
            ]"
            v-if="error.msg != ''"
          >
            {{ error.msg }}
          </div>
          <div class="ta-r" v-if="step==2">
              <button
              type="button"
              class="btn btn-link"
              @click="changeStep(1)"
            >
              返回重新发送
            </button>
            </div>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="confirmLoginThrottle"
            :disabled="
              (!form.isVerifyPass && errorCodeNum >= 3) ||
              !form.phone ||
              !form.code
                ? true
                : false
            "
          >
            确定
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, watch, ref } from "vue";
import dragVerify from "./dragVerify.vue";
import * as bootstrap from "bootstrap";
import { throttle } from "@/utils/tool";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
//步骤
const step = ref(1);
const changeStep = (val) => {
  step.value = val;
  error.type=''
  error.msg = ''
  if(val==2){
    form.code = ''
  }
};
//提示信息
const error = reactive({
  type: "",
  msg: "",
});
// 表单数据
const form = reactive({
  phone: "", //手机号
  isVerifyPass: false, // 滑块验证结果
  code: "", //验证码
});

let myModal = null;
onMounted(() => {
  myModal = new bootstrap.Modal(document.getElementById("loginModal"), {
    keyboard: false,
  });
  const modal = document.getElementById("loginModal");
  modal.addEventListener("show.bs.modal", (event) => {
    form.phone = "";
    form.isVerifyPass = false;
    form.code = "";
    errorCodeNum.value = 0;
    error.type = "";
    error.msg = "";
    step.value = 1
  });
});
// 监听手机号输入完成事件，以便修改完手机号后，需要重新滑块验证
const phoneInputBlur = () => {
  form.isVerifyPass = false;
};

//验证码验证失败次数
const errorCodeNum = ref(0);
const confirmLogin = () => {
  if (form.code.length >= 4) {
    error.type = "";
    error.msg = "";
    if (!/^1\d{10}$/.test(form.phone)) {
      // window.$alert.show({
      //   type: "warning",
      //   message: "请输入11位且1开头的手机号",
      // });
      error.type = "error";
      error.msg = "请输入11位且1开头的手机号";
      return;
    } else {
      error.type = "";
      error.msg = "";
    }
    userStore
      .requestLogin({
        mobile_number: form.phone.trim(),
        mobile_code: form.code,
      })
      .then(() => {
        myModal.hide()
      })
      .catch((res) => {
        errorCodeNum.value += 1;
        error.type = "error";
        error.msg = res.respMsg||"登录失败，请重新登录";
        if(errorCodeNum.value>=3){
          changeStep(1)
        }
        
      });
  }
};

const getCodeClick = () => {
  error.type = "";
  error.msg = "";
  if (!/^1\d{10}$/.test(form.phone)) {
    // window.$alert.show({
    //   type: "warning",
    //   message: "请输入11位且1开头的手机号",
    // });
    error.type = "error";
    error.msg = "请输入11位且1开头的手机号";
    return;
  } else {
    error.value = "";
  }
  if (form.isVerifyPass || errorCodeNum.value < 3) {
    userStore
      .requestLoginCode({
        mobile_number: form.phone,
      })
      .then(() => {
        
        changeStep(2)
      })
      .catch((res) => {
        
        error.type = "error";
        error.msg = res.respMsg||"验证码发送失败";
      });
  }
};

const getCodeThrottle = throttle(getCodeClick);
</script>
<style lang="scss" scoped>
// .modal-dialog {
//   width: 300px;
//   margin-left: auto;
//   margin-right: auto;
// }
.form-control-lg {
  min-height: 40px;
}
// @media screen and (max-width: 768px) {
//   .modal-dialog {
//     width: 90%;
//   }
// }
.invalid-feedback {
  display: block;
}
.ta-r{
  text-align: right;
}
</style>
