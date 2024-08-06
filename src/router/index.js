import { createRouter, createWebHistory } from "vue-router";
import * as bootstrap from "bootstrap";
import { useUserStore } from "@/store/user.js";

const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/pages/home/index.vue"),
        meta: {
          title: "Taovel - 房车露营",
          keywords: "",
          description: "全国房车营地线上预定、实时状态查询",
          // needLogin:true
        },
      },
      {
        path: "detail",
        name: "Detail",
        component: () => import("@/pages/detail/index.vue"),
        meta: {
          title: "66号房车营地详情",
          keywords: "",
          description:
            "66号房车营地套餐预定，套餐内容，套餐价格，158/人，座位费",
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  /*********动态修改keywords和description*************/
  if (Object.keys(to.meta).length > 0 && to.matched.length > 0) {
    let this_meta = to.matched[to.matched.length - 1].meta;
    console.log(this_meta, "---this_meta---");
    if (this_meta.title) document.title = this_meta.title;
    let head = document.getElementsByTagName("head");
    let meta_keyword = document.createElement("meta");
    if (document.querySelector('meta[name="keywords"]')) {
      document
        .querySelector('meta[name="keywords"]')
        .setAttribute("content", this_meta.keywords);
    } else {
      meta_keyword.setAttribute("name", "keywords");
      meta_keyword.setAttribute("content", this_meta.keywords);
      head[0].appendChild(meta_keyword);
    }
    let meta_description = document.createElement("meta");
    if (document.querySelector('meta[name="description"]')) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", this_meta.description);
    } else {
      meta_description.setAttribute("name", "description");
      meta_description.setAttribute("content", this_meta.description);
      head[0].appendChild(meta_description);
    }
  }

  // 每次路由切换时，判断前往页面是否需要登录校验及当前是否登录

  const userStore = useUserStore();
  if (!userStore.isLogin && to.meta?.needLogin) {
    var myModal = new bootstrap.Modal(document.getElementById("loginModal"), {
      keyboard: false,
    });
    myModal.show();
  }
  /**********************************************/
  next();
});

export default router;
