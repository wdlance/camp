<template>
  <div class="alert-wrapper" v-if="visible">
    <div>
      <div
        id="alert"
        class="alert alert-dismissible fade show"
        :class="`alert-${type}`"
      >
        <button
          type="button"
          class="btn-close"
       
          @click="closeListener"
        ></button>
        <h4 class="alert-heading" v-if="type=='warning'">Warning</h4>
        <p class="mb-0">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",

  data() {
    return {
      visible: false,
      message: "",
      type: "success",
      myAlert:null,
      duration:1300
    };
  },
  watch: {
    visible(val) {
      if(val){
          setTimeout(() => {
              this.visible = false
          }, this.duration | 1000);
      }
    },
  },

  methods: {
    closeListener() {
      this.visible = false;

    },
    show(option) {
      this.visible = true;
      
      const { message, type } = option;
      this.message = message || "";
      this.type = type || "success";

      
    },
  },
};
</script>

<style>
.alert-wrapper {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  z-index: 10000;
}

</style>
