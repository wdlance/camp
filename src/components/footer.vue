<template>
  <footer id="footer">
    <div id="footer-bottom">
      <!-- <router-link :to="{ path: $route.path, hash: '' }"> -->
      <div id="back-to-top" @click="scrollToTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          color="#333"
          width="38"
          height="38"
          fill="currentColor"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </div>
      <!-- </router-link> -->

      <div class="pad group">
        <div class="grid one-full">
          <img
            id="footer-logo"
            src="http://demo.alx.media/gridzone/wp-content/uploads/sites/21/2019/07/gridzone-logo.png"
            alt="Gridzone"
          />
          <div id="copyright">
            <p>Gridzone © 2024. All Rights Reserved.</p>
          </div>
          <!--/#copyright-->
          <div id="credit">
       
              Powered by
              <a href="http://wordpress.org" rel="nofollow">WordPress</a>. Theme
              by <a href="http://alx.media" rel="nofollow">Alx</a>.
     
          </div>
          <!--/#credit-->
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // 可选，平滑滚动
      });
    },
  },
};
</script>
<style>
#footer {
  color: #777;
  position: relative;
  padding-bottom: 90px;
  border-top: 1px solid #e5e5e5;
  text-align: center;
}
#copyright,
#credit {
  color: #666;
  font-weight: 300;
  line-height: 1;
  font-size: 14px;
}

#back-to-top {
  border: 1px solid #e5e5e5;
  border-top: 0;
  color: #333;
  padding: 10px;
  overflow: hidden;
  text-align: center;
  width: 60px;

  display: block;
  margin: 0 auto;
  margin: 0 auto 0;
  border-radius: 0 0 10px 10px;
}

#back-to-top i {
  font-size: 38px;
  position: relative;
  top: -7px;
}

#back-to-top:hover {
  color: #333;
}
#footer-logo {
  max-height: 60px;
  margin: 20px 0;
}
</style>
