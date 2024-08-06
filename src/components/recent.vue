<template>
    <div class="card" v-if="item">
        <div class="title">{{ item.title }}</div>
        <div class="item " v-for="(v, index) in item.list" :key="index" @click="()=>toDetail(v)">
      
                <!-- <slot name="preIcon"></slot> -->
                <svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12" fill="currentColor"
            class="bi bi-clock-fill" viewBox="0 0 16 16" v-if="type=='post'">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12" fill="currentColor"
            class="bi bi-chat-fill" viewBox="0 0 16 16" v-if="type=='comment'">
            <path
              d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
          </svg>
          <span class="m-l-4">{{ v.text }}</span>
         

        </div>
    </div>
</template>
<script>
export default {
    props: {
        type:{
            type:String,
            default:''
        },
        item: {
            type: Object,
            default: () => { { } }
        }
    },
    methods:{
        //去详情页
        toDetail(item){

        }
    }

}
</script>
<style lang="scss" scoped>
.card {

    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    padding: 40px;

    border: none;
}

.card .title {
    font-size: 16px;
    font-weight: 600;

    color: #333;
    text-align: left;
    margin-bottom: 10px;
}

.item {
    color: #999;
    font-weight: 300;
    font-size: 14px;
    padding: 7px 0;

    a {
        vertical-align: baseline;
       
    }
    .bi{
        color: #ccc;
    }

    .m-l-4 {
        margin-left: 4px;
    }

    a:hover {
        color: #777;
        .bi{
        color: #777;
    }
    }
}
</style>