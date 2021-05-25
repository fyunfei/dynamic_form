<template>
  <!-- 视图区 -->

  <div class="views-con">
    <h3>视图区</h3>
    <el-form>
      <FormItem
        class="views-item"
        :class="{'views-item_select': widgetSelect === widget.id}"
        @click.native="handleConfig(widget,index)"
        v-for="(widget,index) in widgets"
        :key="widget.id"
        :element="widget"
      />
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
// import { getConfig } from './utils/index'
import FormItem from '@/components/FormItem'
export default {
  data () {
    return {
      widgetSelect: null
    }
  },
  components: {
    FormItem
  },
  computed: {
    ...mapState({
      widgets: (state) => state.widgets
    })
  },
  methods: {
    ...mapMutations(['addConfig', 'changeConfigable']),
    // 点击事件触发配置信息
    handleConfig (widget, index) {
      this.addConfig(widget)
      this.changeConfigable(true)
      this.widgetSelect = widget.id
    }
  }
}
</script>

<style lang="scss" scoped>
$selectColor: #ccc;
.views-con {
  transition: all 300ms ease;
  .views-item {
    padding: 5px 0;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid $selectColor;
    }
    &_select {
      border: 2px solid $selectColor;
    }
  }
}
</style>
