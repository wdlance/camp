<template>
  <article class="detail-wrapper">
    <div class="card">
      <div class="image-container">
        <div class="entry-media">
          <div class="post-format">
            <div class="image-container">
              <img
                src="https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E.jpg"
                class="attachment-gridzone-large-h size-gridzone-large-h wp-post-image"
                alt=""
                decoding="async"
                fetchpriority="high"
                srcset="
                  https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E.jpg         853w,
                  https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E-150x150.jpg 150w,
                  https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E-300x300.jpg 300w,
                  https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E-768x768.jpg 768w,
                  https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E-200x200.jpg 200w,
                  https://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E-520x520.jpg 520w
                "
                sizes="(max-width: 853px) 100vw, 853px"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="entry-title">Smashing Mystery</div>
          <div class="entry-meta">
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
                /></svg
              >{{ detail.createTime }}
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
                /></svg
              >{{ detail.commentNum }}</a
            >
            <div class="item flex flex-ai-c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
              {{ detail.author }}
            </div>
            <div
              class="item"
              v-for="(item, index) in detail.categories"
              :key="index"
            >
              <button type="button" class="btn btn-light">{{ item }}</button>
            </div>
          </div>
          <!-- 博客正文内容 -->
          <richText></richText>
          <div class="entry-footer">
            <div class="post-tags">
              <span>Tags:</span>
              <button
                type="button"
                class="btn btn-light"
                v-for="(item, index) in detail.tagList"
                :key="index"
              >
                {{ item }}
              </button>
            </div>
            <div class="author-bio">
              <div class="bio-avatar">
                <div class="inner">
                  <img :src="detail.avatar" />
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" color="#000" width="20" height="20"
                                        fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg> -->
                </div>
              </div>

              <p class="bio-name">Alexander</p>
              <p class="bio-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="post-nav">
              <div class="item next">
                <div class="m-r-15">
                  <strong>Next</strong>
                  <span>Leaner Responsive Images</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ccc"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
              <div class="item previous">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ccc"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                <div class="m-l-15">
                  <strong>Previous</strong> <span>Known Vulnerabilities</span>
                </div>
              </div>
            </div>

            <div id="comments" class="themeform">
              <response :response="detail.responseList"></response>
              <comment v-if="showComment"></comment>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 相关列表数据 -->
    <relative></relative>
  </article>
</template>
<script>
//评论回复表单
import comment from "@/components/comment.vue";
//评论回复列表
import response from "@/components/response.vue";
//事件总线，用于组件间通讯
import eventbus from "@/utils/eventbus.js";
//博客正文内容，采用富文本形式
import richText from "@/components/richText.vue";
//相关列表数据
import relative from "@/components/relative.vue";
export default {
  components: { comment, response, richText, relative },
  data() {
    return {
      showComment: true,
      detail: {
        createTime: "July 16, 2014", //创建时间
        commentNum: 4, //评论数量
        categories: ["General", "Travel"],
        tagList: ["Demo", "design", "Example"],
        author: "Alexander", //博主名称
        avatar:
          "http://demo.alx.media/gridzone/wp-content/uploads/sites/21/2013/10/StockSnap_8UWSPI773Q.jpg", //博主头像,
        responseList: [
          {
            id: 1,
            avatar:
              "http://demo.alx.media/gridzone/wp-content/uploads/sites/21/2013/10/StockSnap_8UWSPI773Q.jpg", //博主头像,
            author: "Alezandar",
            createTime: "October 31, 2013 at 8:16 am",
            content:
              "Here is another awesome comment. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            children: [
              {
                id: 11,
                parentId: 1,
                avatar:
                  "http://demo.alx.media/gridzone/wp-content/uploads/sites/21/2014/06/StockSnap_FLU1A9EK7E.jpg",
                author: "jessic",
                createTime: "October 31, 2014 at 8:16 am",
                content:
                  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
              },
            ],
          },
        ],
      },
    };
  },
  created() {
    eventbus.on("showComment", () => {
      this.showComment = true;
    });
    eventbus.on("hideComment", () => {
      this.showComment = false;
    });
    eventbus.on("pushComment", (item) => {
      !this.detail.responseList && (this.detail.responseList = []);

      this.detail.responseList.push({
        id: this.detail.responseList.length + 1,
        avatar:
          "http://demo.alx.media/gridzone/wp-content/uploads/sites/21/2013/10/StockSnap_8UWSPI773Q.jpg", //博主头像,
        author: item.name,
        createTime: new Date(),
        content: item.content,
      });
    });
    eventbus.on("pushReponse", (item) => {
      const { id, parent } = item;
      if (this.detail.responseList && this.detail.responseList[parent]) {
        if (!this.detail.responseList[parent].children) {
          this.detail.responseList[parent].children = [];
        }
      }
      this.detail.responseList[parent].children.push({
        id: parent + this.detail.responseList[parent].children.length + 1,
        parentId: id,
        avatar:
          "http://demo.alx.media/gridzone/wp-content/uploads/sites/21/2013/10/StockSnap_8UWSPI773Q.jpg", //博主头像,
        author: item.name,
        createTime: new Date(),
        content: item.content,
      });
    });
  },
};
</script>
<style lang="scss" scoped>

.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in;
  border: none;
  overflow: hidden;
  .card-body {
    padding: 40px;
  }
}

.entry-meta {
  display: flex;
  flex-wrap: wrap;

  max-width: 740px;
  margin:0 auto 20px;
  font-weight: 300;
    font-size: 16px;
    color: #999;
  .item {
    margin-right: 10px;
  }
  svg {
    margin-right: 4px;
  }
}

.entry-media {
  max-width: 1920px;
  padding-left: 0;
  padding-right: 0;
  img {
    width: 100%;
  }
}
.entry-title {
  font-weight: 300;
  font-size: 50px;
  line-height: 1.3em;
  letter-spacing: -1px;

  margin-right: 40px;
  color: #333;
  max-width: 740px;
  margin:0 auto 20px;
}
.entry-footer {
  margin-top: 40px;
  .post-tags {
    display: flex;
    align-items: center;
    span {
      margin-right: 5px;
    }
    button {
      margin: 0 5px 6px 0;
    }
  }
}

.author-bio {
  background: #f5f5f5;
  padding: 0 20px 20px;
  border-radius: 10px;
  position: relative;
  color: #777;
  margin: 80px 0 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bio-name {
    color: #333;
    font-size: 19px;
    font-weight: 600;
    margin: 10px 0;
  }
  .bio-avatar {
    position: relative;
    .inner {
      width: 64px;
      height: 64px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      margin-top: -32px;
      &::after {
        background: #333;
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 4px 4px;
        content: "\f303";
        color: #fff;
        font-size: 10px;
        line-height: 12px;
        width: 20px;
        height: 20px;
        font-style: normal;
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        text-align: center;
        border-radius: 100%;
      }
    }
    img {
      width: 100%;
    }
    svg {
      position: absolute;
      bottom: -5px;
      right: -5px;
      z-index: 10;
    }
  }
  .bio-desc {
    font-size: 16px;
    color: #777;
  }
}

.post-nav {
  background: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  .m-l-15 {
    margin-left: 15px;
  }
  .m-r-15 {
    margin-right: 15px;
  }
  .item {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    &.previous {
      order: 1;
    }
    &.next {
      order: 2;
      justify-content: flex-end;
    }
  }
  strong {
    display: block;
    font-size: 12px;
    color: #aaa;
    letter-spacing: 0.5px;
    font-weight: normal;
    text-transform: uppercase;
  }
  span {
    font-size: 15px;
    font-weight: 600;
    color: #333;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.detail-wrapper {
  padding: 20px 20px 0px;
}
@media only screen and (min-width: 480px) and (max-width: 1080px) {
    .entry-title {
        font-size: 42px;
    }
}
@media only screen and (max-width: 1280px) {
    .entry-title {
        font-size: 38px;
    }
}
@media screen and (max-width: 768px) {
  .detail-wrapper{
    padding:20px 40px 0px;
  }
  .card {
    .card-body {
      padding: 40px 20px;
    }
  }

  article {
    padding: 0px;
  }
  .entry-title{
    margin-bottom: 10px;
    font-size: 28px;
  }
  .entry-meta {
    font-size: 15px;
  }
  .post-nav {
    flex-direction: column;

    .previous {
      order: 2;
    }

    .next {
      order: 1;
    }

    strong {
      display: none;
    }
  }
}
@media screen and (max-width:479px) {
  .detail-wrapper{
    padding: 0px;
  }
}
</style>
