<template>
    <div id="response">
        <h3 class="heading">2 Responses</h3>

        <div class="comment-tabs group">
            
            <button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
                    <path
                        d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
                    <path
                        d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
                </svg>Comments<span class="num">2</span></button>

            <button type="button" class="btn btn-light m-l-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z" />
                </svg>Pingbacks<span class="num">0</span></button>
        </div>

        <div id="commentlist-container" class="comment-tab">
            <div class="parent" v-for="(item, index) in response" :key="index">
                <response-item :item="item" :parent="index"></response-item>
                <div class="child" v-for="(v, idx) in item.children" :key="idx">
                    <response-item :item="v" :parent="index"></response-item>
                </div>
            </div>



        </div>
    </div>
</template>
<script>
import responseItem from "@/components/responseItem.vue"
export default {
    components: { responseItem },
    props: {
        response: {
            type: Array,
            default: () => { [] }
        }
    },
}
</script>
<style lang="scss" scoped>
#response{
    padding-bottom: 10px;
.child{
    padding-left: 58px;
}
.m-l-2{
    margin-left: 2px;
}
.heading{
    margin-bottom: 18px;
}
.comment-tabs{
    margin-bottom: 30px;
    .num{
    
    background-color: #fff;
    padding: 0 6px;
    margin-left: 8px;
    -webkit-border-radius: 4px;
    border-radius: 4px;

    }
}

.btn{
    height: 46px;
    width: 155px;
}
}

</style>