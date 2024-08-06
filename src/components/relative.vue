<template>
  <div class="relative-wrapper">
    <div
      v-for="(item, index) in relativeList"
      :key="index"
      class="relative-item"
    >
      <div class="card">
        <div
          class="image-wrapper"
          :style="{ 'background-image': `url(${item.src})` }"
        ></div>
        <div class="card-body">
          <div class="title">{{ item.title }}</div>
          <div class="flex btns">
            <div class="item flex flex-ai-c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-calendar m-r-4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                />
              </svg>

              {{ item.createTime }}
            </div>
            <a @click.stop="() => {}" class="item flex flex-ai-c"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-heart m-r-4"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
              {{ item.commentNum }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//x相关列表数据
import relativeList from "@/assets/mocks/relativeList.js";
export default {
  data() {
    return {
      relativeList,
    };
  },
};
</script>
<style lang="scss" scoped>
.relative-wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 30px -20px 0px;
  .relative-item {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
  }
  .m-l-24 {
    margin-left: 24px;
  }
  .m-r-4 {
    margin-right: 4px;
  }
  .card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in;
    border: none;
    overflow: hidden;
    flex: 1;
    .image-wrapper {
      width: 100%;
      padding-top: 66.66%;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .card-body {
      padding: 20px 20px 14px;
    }
  }
  .title {
    color: #333;
    text-decoration: none;
    display: block;
    font-size: 16px;
    font-weight: 600;
  }

  .btns {
    font-size: 14px;
    padding: 14px 0px 0px;
    color: #999;

    .item {
      margin-right: 20px;

      &:last-child {
        margin-right: 0px;
      }
    }
    svg {
      flex-shrink: 0;
    }
  }
}
@media screen and (min-width: 1280px)  {
  .relative-wrapper {
    .relative-item {
      width: 33.33%;
    }
  }
}
@media screen and (min-width: 960px) and (max-width: 1024px) {
  .relative-wrapper {
    .relative-item {
      width: 33.33%;
    }
  }
}

@media screen and (max-width: 768px) {
  .relative-wrapper {
    margin: 30px -10px 0px;
    .relative-item {
      padding: 10px;
    }

    .card .card-body {
      padding: 20px 10px;
    }
  }
}
@media screen and (max-width:479px) {
  .relative-wrapper {
    margin: 30px 10px 0px;
  }
}
</style>
