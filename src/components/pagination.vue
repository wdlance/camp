<script>
export default{
    props:{
        page:{
            default:()=>{
                return{
                    total:0,
                    pageSize:20,
                    pageNum:1
                }
            },
            type:Object
        }
    },
   computed:{
     num(){
        return parseInt(this.page.total/this.page.pageSize)+1
  
     }
   }
    
}
</script>
<template>
    <ul class="pagination pagination-lg">
    <li class="page-item" :class="[page.pageNum==1?'disabled':'']">
      <a class="page-link" href="#">&laquo;</a>
    </li>
    
    <li class="page-item" :class="[page.pageNum==index+1?'active':'']" v-for="(item,index) in  Array(num)" :key="index">
      <a class="page-link" href="#">{{ index+1 }}</a>
    </li>
    <li class="page-item"  :class="[page.pageNum==parseInt(page.total/page.pageSize)?'disabled':'']">
      <a class="page-link" href="#">&raquo;</a>
    </li>
  </ul>
</template>
<style>
.pagination{
   justify-content: center;
   padding:30px 20px;
   margin-bottom: 0;
}</style>