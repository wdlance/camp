<script>
import waterfall from "@/components/waterfall.vue"
import postList from "@/assets/mocks/postList.js";
import pagination from "@/components/pagination.vue"
import bloger from "@/components/bloger.vue";
export default {
    components: {
        waterfall,
        pagination,
        bloger
    },
    data() {
        return {
            list: postList.data,//瀑布流列表
            page: postList.page,//瀑布流分页信息
        }
    },

    methods: {
        waterfall(items, columnWidth) {
            let columns = [[], []]; // 初始化两列
            items.forEach((item, index) => {
                // 计算最短列的索引
                const shortColumnIndex = columns[0].length < columns[1].length ? 0 : 1;
                // 添加项到最短的列

                columns[shortColumnIndex].push({
                    ...item,
                    height: item.height || columnWidth // 假设每个项目有一个height属性
                });
            });
            console.log(columns)
            return columns.flat(); // 将两列合并为一个数组
        },


    }
}
</script>
<template>
    <bloger></bloger>
    <waterfall :items="list" :column-width="200" :gutter="100">

    </waterfall>

    <pagination :page="page"></pagination>
</template>