<template>

    <div v-masonry transition-duration="0.3s" item-selector=".item">
    <div v-masonry-tile class="item" v-for="(item, index) in items">
        <card :item="item" />
    </div>
</div>

</template>
<script>
import card from "@/components/card.vue"

export default {
    components: { card },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    updated() {
        var grid = document.querySelector(".grid");
        var msnry = new Masonry(grid, {
            itemSelector: ".item",
            columnWidth: 200,
            gutter:40
        });
    }
}
</script>
<style lang="scss" scoped>
.item{
    width:25%;
}
</style>