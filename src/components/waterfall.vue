<template>
  <div class="waterfall" ref="waterfallRef">
    <!-- 循环渲染每一列 -->
    <div class="waterfall-column" v-for="(column, index) in columns" :key="index">
      <!-- 循环渲染每一项 -->
      <div class="waterfall-item" v-for="(item, i) in column" :key="i">
        <card :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue"
export default {
  components: { card },
  name: 'Waterfall',
  props: {
    items: {
      type: Array,
      required: true
    },
    columnWidth: {
      type: Number,
      default: 200
    },
    gutter: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      columns: [] // 存储每一列的数据
    }
  },
  watch: {
    items: {
      handler: function (newVal, oldVal) {
        this.initColumns() // 监听数据变化，重新计算每一列的数据
      },
      deep: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initColumns() // 初始化计算每一列的数据
      window.addEventListener('resize', this.initColumns) // 监听窗口大小变化，重新计算每一列的数据
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.initColumns) // 组件销毁时移除监听
  },
  methods: {
    initColumns() {
      try {
        
        let containerWidth = document.body.clientWidth // 获取容器宽度
        
        if(containerWidth>1280){
          containerWidth -= 320 
        }
        let columnsCount = 4
        if (containerWidth > (1280)) {
          columnsCount = 4
        } else if (containerWidth >= (768)) {
          columnsCount = 3
        } else {
          columnsCount = 2
        }
        columnsCount = columnsCount == 0 ? 1 : columnsCount;
        const columns = new Array(columnsCount).fill().map(() => []); // 初始化每一列的数据
        this.items.forEach((item, index) => {
          const columnIndex = index % columnsCount; // 计算当前项应该放在哪一列
          columns[columnIndex].push(item) // 将当前项放入对应的列中
        })
        this.columns = columns; // 更新每一列的数据
      } catch (e) {
        console.log(e)
      }



    }
  }
}
</script>

<style scoped>
.waterfall {
  display: flex;
  width: 100%;

}

.waterfall-column {
  flex: 1;

}

.waterfall-item {
  padding: 20px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}

.waterfall-item .text {
  position: absolute;
  z-index: 9999;
  top: 0px;
  right: 0px;
  left: 0px;
  text-align: center;
  background-color: rgba(30, 29, 29, 0.5);
  /* 设置背景颜色为白色，透明度为0.5 */
  color: aliceblue;
  transition: 0.3s;
  transform: translateY(-100px);
}

.waterfall-item .img {
  transition: 0.8s;
}

.waterfall-item .img:hover {
  transform: scale(1.2);
}

.waterfall-item:hover .text {
  transform: translateY(0px);
}

@media screen and (max-width:768px) {
  .waterfall-column{
    padding-top:10px;
    &:first-child{
      padding-left: 10px;
    }
    &:last-child{
      padding-right: 10px;
    }
  }
  .waterfall-item {
    padding: 10px;
  }
}
</style>