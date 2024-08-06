<template>
  <div
    class="modal"
    tabindex="-1"
    id="logoutModal"
    :data-bs-keyboard="false"
    :data-bs-backdrop="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">退出</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>确认退出？</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="logoutClick">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const logoutClick = () => {
  debugger
  userStore.requestLogout()
};
</script>
