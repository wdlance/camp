<template>
    <div class="bloger-wrapper" v-if="bloger">
        <div class="left">
            <div class="profile-image">
                <img :src="bloger.avatar" alt="...">
            </div>
        </div>
        <div class="right">
            <div class="name">{{ bloger.name }}</div>
            <div class="desc">{{ bloger.desc }}</div>
        </div>
    </div>
</template>
<script>
import bloger from "@/assets/mocks/bloger.js";
export default {
    data() {
        return {
            bloger: null
        }
    },
    created() {
        this.getBlogerInfo()
    },
    methods: {
        getBlogerInfo() {
            this.bloger = bloger
        }
    }
}
</script>
<style>
.left {

    flex-shrink: 0;
}

.profile-image {
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;

    overflow: hidden;

    img {
        width: 100%;
        border-radius: 10px;
    }
}

.name {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -0.7px;
    line-height: 1.3em;
    color: #333;
    padding-top: 12px;
    margin-bottom: 10px;
    max-width: 720px;
}

.desc {
    font-size: 20px;
    font-weight: 300;
    color: #777;
    letter-spacing: 0;
    line-height: 1.5em;
    max-width: 720px;
}

.bloger-wrapper {
    display: flex;
    padding: 10px 20px 20px;
}

@media screen and (max-width:768px) {
    .bloger-wrapper{
        padding:0px 20px 20px 20px;
    }
    .profile-image {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
    .name{
    font-size: 20px;
    padding-top:0px ;
    }
    .desc{
        font-size: 16px;
    }
}
</style>
