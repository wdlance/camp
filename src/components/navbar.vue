<template>
  <div class="navbar-wrapper p-lr-40">
    <a class="navbar-brand d-flex flex-ai-c" href="#">
      <!-- logo最高只能显示60px -->
      <img
        src="https://demo.alx.media/x/images/logo.png"
        alt="Gridzone"
        class="logo"
      />
      <div class="m-l-20 brand-desc">Rock-solid Portfolio</div>
    </a>
    <nav class="navbar navbar-expand-lg" data-bs-theme="light">
      <div class="d-flex search-and-button">
        <div class="input-group w-50p">
          <input type="text" class="form-control" placeholder="" />
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
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse flex-jc-fe" id="navbarColor01">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              >Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Categories</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">General</a>
              <a class="dropdown-item" href="#">Lifestyle</a>
              <a class="dropdown-item" href="#">Mixed</a>
              <a class="dropdown-item" href="#">Travel</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Layouts</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Sider Left</a>
              <a class="dropdown-item" href="#">Sider Right</a>
              <a class="dropdown-item" href="#">No Sider</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              v-if="!userStore.isLogin"
              >登录
            </a>
            <a
              class="nav-link"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
              v-else-if="userStore.userInfo"
            >
              {{ userStore.userInfo.nick }}
            </a>
          </li>
        </ul>
        <div class="input-group search-form m-l-12">
          <input type="text" class="form-control" placeholder="" />
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
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>
<style lang="scss" scoped>
.form-control,
.input-group-text {
  background-color: #fff;
  border: 1px solid #eceeef !important;
  color: #888;
}

.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #78c2ad;
  padding: 0 40px;
  height: 80px;
}

.logo {
  max-height: 60px;
}

.p-lr-40 {
  padding: 0 40px;
}

.m-l-12 {
  margin-left: 12px;
}

.m-l-20 {
  margin-left: 20px;
}

.navbar {
  padding: 0px;
}
.navbar-nav {
  margin-right: 12px;
}
.dropdown-menu {
  width: 150px;
}

.brand-desc {
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  margin-left: 20px;
}
.nav-link {
  color: rgba(255, 255, 255, 0.65);
  &.active {
    color: #fff;
  }
  &.show {
    color: #fff;
  }
}
.dropdown-item {
  padding: 7px;
}
.navbar-toggler {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  // box-shadow:0 0 0 0.25rem rgba(255, 255, 255, 0.1);
  box-shadow: none;
}
@media screen and (max-width: 992px) {
  .navbar-wrapper {
    flex-direction: column;
    padding: 0px;
    height: auto;
  }
  .navbar-brand {
    justify-content: center;
    height: 80px;
  }

  .search-form {
    display: none !important;
  }

  .dropdown-menu {
    width: 100%;
  }

  .nav-item {
    min-height: 48px;
  }
}

.search-and-button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  align-items: center;
  padding: 13px 20px;
}

@media (min-width: 992px) {
  .search-and-button {
    display: none !important;
  }
}

.nav-item {
  margin-left: 20px;
  flex-shrink: 0;
}

.w-50p {
  width: 50% !important;
}
</style>
