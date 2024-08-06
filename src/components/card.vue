<template>
    <div class="card" @click="()=>toDetail()">
        <div class="relative">
            <img :src="item.src" class="card-img-top" alt="...">
            <!-- <div class="category" :class="[showCategory ? 'show' : '']">
                <button type="button" class="btn btn-dark" v-for="(v, idx) in item.categories" :key="idx"
                    @click.stop="() => {toCategory(v)}">{{ v
                    }}</button>
            </div> -->
        </div>
        <div class="card-body">
            <div class="title">{{ item.title }}</div>
            <div class="flex btns">
                <div class="item flex flex-ai-c"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                        fill="currentColor" class="bi bi-calendar m-r-4" viewBox="0 0 16 16">
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>{{ item.createTime }}</div>
                <a @click.stop="()=>toDetail('comment')" class="item flex flex-ai-c"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                        height="14" fill="currentColor" class="bi bi-heart m-r-4" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>{{ item.commentNum }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => { { } }
        }
    },
    data() {
        return {
            // 决定是否显示分类
            showCategory: false
        }
    },
    methods: {
        // 点击了某个博客分类
        toCategory(item){

        },
        //显示分类
        showCategories() {
            this.showCategory = true
        },
        //跳转到详情页
        toDetail(from) {
            setTimeout(() => {
                const option = from?{
                    path:"/detail",
                    hash:`#${from}`
                }:{
                    path:"/detail",
                }
                this.$router.push(option)
                this.showCategory = false
            }, 500);
        }
    }
}
</script>
<style lang="scss" scoped>
.m-l-24 {
    margin-left: 24px;
}
.m-r-4 {
    margin-right: 4px;
}
.category {
    background: transparent;
    color: #bbb;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -100px;
    padding: 20px 20px 14px;
    pointer-events: none;
    transition: all 0.5s ease;
    cursor: pointer;
    .btn {
        margin: 0px 2px 2px 0;
    }
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in;
    border: none;
    &:hover {
        .category {
            bottom: 0px;
            opacity: 1;
        }
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
    svg{
      flex-shrink: 0;
    }
}

@media screen and (max-width:768px) {
    .card .card-body{
      padding:20px 10px;
    }
}
</style>