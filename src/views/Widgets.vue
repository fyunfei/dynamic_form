<template>
  <!-- 物料区 -->
  <div>
    <h3>基本组件</h3>
    <ul class="widget-list">
      <li class="widget" @click="handleClick('ElInput')">输入框</li>
      <li class="widget" @click="handleClick('ElSelect')">下拉框</li>
      <li class="widget" @click="handleClick('ElRadioGroup')">单选框</li>
      <li class="widget" @click="handleClick('ElCheckboxGroup')">多选框</li>
      <li class="widget" @click="handleClick('ElDatePicker')">时间选择器</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { v4 } from 'uuid'
import { getComponentConfig, formConfig, formItemConfig } from './utils/index'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['addWidgets']),
    handleClick (type) {
      const id = v4()
      // 将组件所有配置在最开始写入到options
      // 根据形参type获取到当前组件的默认配置
      const componentOpt = getComponentConfig(type)
      const config = JSON.parse(
        JSON.stringify(
          Object.assign(
            { id, type },
            componentOpt,
            { form: formConfig },
            { formItem: formItemConfig }
          )
        )
      )
      this.addWidgets(config)
    }
  }
}
</script>

<style lang="scss" scoped>
.widget-list {
  display: flex;
  flex-wrap: wrap;
  .widget {
    cursor: pointer;
    user-select: none;
    padding: 5px 10px;
    border: 1px solid;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
