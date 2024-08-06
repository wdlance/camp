<script>
import { RouterView } from 'vue-router';
import navbar from "@/components/navbar.vue"
import recent from "@/components/recent.vue"
import recentPoster from "@/assets/mocks/recentPost.js"
import recentComment from "@/assets/mocks/recentComment.js"
import bottom from "@/components/footer.vue"
export default {
    components: { recent, navbar,bottom },
    data() {
        return {
            poster: {
                title: "Recent Posts",
                list: recentPoster
            },
            comment: {
                title: "Recent Comments",
                list: recentComment
            }
        }
    }
}
</script>

<template>
    <navbar />
    <div class="main">
        <div class="left">
            <RouterView />
        </div>
        <div class="right">
            <recent :item="poster" class="">
                <template #preIcon="{ row }">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#ccc" width="12" height="12" fill="currentColor"
                        class="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>
                </template>
            </recent>
            <recent :item="comment" class="m-t-40">
                <template #preIcon="{ row }">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#ccc" width="12" height="12" fill="currentColor"
                        class="bi bi-chat-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                    </svg>
                </template>
            </recent>
            <div class="card m-t-40">
                <div class="title">Search</div>
                <div class="input-group mb-3">
                    <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></span>
                    <input type="text" class="form-control" placeholder="To search type and hit enter">

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
    width: 320px;
    padding-left: 20px;
    box-sizing: border-box;
    padding-top: 40px;
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
    margin: 0 -40px 10px;
    padding: 0 40px;
    color: #333;
    text-align: left;
}

@media screen and (max-width:1024px) {
    .main {
        display: block;
    }

    .left {
        width: 100%;
    }

    .right {
        width: 100%;
        padding-left: 0px;
    }

    .m-t-40 {
        margin-top: 0px;
    }
}
@media screen and (max-width:768px) {
.left{
    padding: 20px 10px;
}
}
</style>