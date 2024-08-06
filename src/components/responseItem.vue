<template>
    <div class="response-item flex" v-if="item">
        <div class="avatar">
            <img :src="item.avatar" />
        </div>
        <div>
            <div class="flex">
                <div class="author">{{ item.author }}</div>
                <div class="comment-meta">

                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                        class="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>
                    {{ item.createTime }}
                </div>
            </div>
            <div class="content">{{ item.content }}</div>
            <button type="button" class="btn btn-link reply-btn" @click="toReply">Reply</button>
            <comment :id="item.id" v-if="showComment" :parent="parent"></comment>
        </div>
    </div>
</template>
<script>
import comment from "@/components/comment.vue"
import eventbus from '@/utils/eventbus.js';
export default {
    components: { comment },
    props: {
        // 评论相关信息
        item: {
            type: Object,
            default: () => { { } }
        },
        // 当前评论所在父级的序号
        parent:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            showComment: false
        }
    },
    created() {
        eventbus.on("hideResponse", () => {
            this.showComment = false
        })
        eventbus.on("showComment", () => {
            this.showComment = false
        })
    },
    methods: {
        // 显示评论区域
        toReply() {
            eventbus.emit('hideResponse');
            eventbus.emit('hideComment');
            this.showComment = true
        },
        
    }
}
</script>
<style lang="scss" scoped>
.response-item {
    margin-bottom: 15px;

    .author {
        color: #333;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
    }

    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-right: 10px;

        img {
            width: 100%;
        }
    }

    .content {
        font-size: 14px;
        line-height: 22px;
        color: #777;
        margin-bottom: 8px;
    }

    .reply-btn {
        margin: 0px;
        padding: 0px;
        color: #aaa;
        text-decoration: none;

        &:hover {
            color: #333;
        }
    }

    .comment-meta {
        color: #ccc;
        display: flex;
        align-items: center;

        svg {
            margin: 0 4px;
        }
    }
}
</style>