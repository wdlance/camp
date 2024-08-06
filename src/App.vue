<script>
import { RouterView } from "vue-router";
// 顶部菜单
import navbar from "@/components/navbar.vue";
//右侧最新内容
import recent from "@/components/recent.vue";
// 页面页脚
import bottom from "@/components/footer.vue";
//最新博文模拟数据
import recentPoster from "@/assets/mocks/recentPost.js";
//最新评论模拟数据
import recentComment from "@/assets/mocks/recentComment.js";
//登录弹窗
import login from "@/components/login.vue";
import logout from "@/components/logout.vue";
import alert from "@/components/alert.vue"
export default {
  components: { recent, navbar, bottom, login, logout,alert},
  data() {
    return {
      poster: {
        title: "Recent Posts",
        list: recentPoster,
      },
      comment: {
        title: "Recent Comments",
        list: recentComment,
      },
    };
  },
  mounted(){
    window.$alert = this.$refs.alertRef
  }
};
</script>

<template>
  <Teleport to="body">
    <login></login>
    <logout></logout>
    <alert ref="alertRef"></alert>
  </Teleport>
  <navbar />
  <div class="main">
    <div class="left">
      <RouterView />
    </div>
    <div class="right">
      <recent :item="poster" :type="'post'" class="m-t-40"> </recent>
      <recent :item="comment" class="m-t-40" :type="'comment'"> </recent>
      <div class="card m-t-40">
        <div class="title">Search</div>
        <div class="input-group">
          <span class="input-group-text"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              /></svg
          ></span>
          <input
            type="text"
            class="form-control"
            placeholder="To search type and hit enter"
          />
        </div>
      </div>
    </div>
  </div>
  <bottom></bottom>
</template>
<style lang="scss" scoped>
.m-t-40 {
  margin-top: 40px;
}
.input-group {
  height: 34px;
}
.main {
  display: flex;
}

.left {
  flex: 1;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.right {
  width: 300px;

  box-sizing: border-box;
}

.card {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 40px;
  border: none;
}

.card .title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 -40px 16px;
  padding: 0 40px;
  color: #333;
  text-align: left;
}

@media screen and (max-width: 1024px) {
  .main {
    display: block;
  }

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }

  .m-t-40 {
    margin-top: 0px;
  }
}

@media screen and (max-width: 768px) {
  .left {
    padding: 20px 0px;
  }
}
</style>
