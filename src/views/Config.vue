<template>
  <!-- 配置区 -->
  <transition name="slideIn">
    <div v-show="configable">
      <h3>组件配置</h3>
      <el-tabs v-model="activeName">
        <el-tab-pane label="表单全局配置" name="global">
          <el-form :model="config" label-width="70px">
            <el-form-item label="标签定位">
              <el-radio-group v-model="config['label-position']">
                <div class="radio-item">
                  <el-radio label="left">靠左对齐</el-radio>
                </div>
                <div class="radio-item">
                  <el-radio label="right">靠右对齐</el-radio>
                </div>
                <div class="radio-item">
                  <el-radio label="top">居中对齐</el-radio>
                </div>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="表单行配置" name="row">
          <el-form :modle="config" label-width="70px">
            <el-form-item label="单行标签">
              <el-input v-model="config.formItem.label" placeholder="请输入行标签"></el-input>
            </el-form-item>
            <el-form-item label="标签宽度">
              <el-input v-model="config.formItem['label-width']" placeholder="输入示例：100px、100%"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="组件配置" name="component">
          <el-form :model="config" label-width="115px">
            <el-form-item label="默认输入">
              <el-input placeholder="请输入默认输入" type="text" v-model="config.options.value" />
            </el-form-item>
            <el-form-item label="占位内容">
              <el-input placeholder="请输入占位内容" type="text" v-model="config.options.placeholder" />
            </el-form-item>
            <el-form-item label="最大输入长度">
              <el-input type="number" placeholder="请输入最大输入长度" v-model="config.options.maxlength"></el-input>
            </el-form-item>
            <el-form-item label="最小输入长度">
              <el-input type="number" placeholder="请输入最小输入长度" v-model="config.options.minlength"></el-input>
            </el-form-item>
            <el-form-item label="输入数字统计" label-width="115px">
              <template v-slot:label>
                <span>输入字数统计</span>
                <el-tooltip content="开启数字统计前请先设置最大输入长度">
                  <i class="el-icon-warning"></i>
                </el-tooltip>
              </template>
              <el-switch v-model="config.options['show-word-limit']"></el-switch>
            </el-form-item>
            <el-form-item label="是否可清空">
              <template v-slot:label>
                <span>是否可清空</span>
                <el-tooltip content="若预览清空功能请先设置默认输入">
                  <i class="el-icon-warning"></i>
                </el-tooltip>
              </template>
              <el-switch v-model="config.options.clearable"></el-switch>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      activeName: 'global'
    }
  },
  computed: {
    ...mapState({
      config: (state) => state.config,
      configable: (state) => state.configable
    })
  },
  methods: {
    // 监听输入框输入事件
  },
  watch: {
    config (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-item {
  padding-bottom: 10px;
}
.slideIn-enter-active,
.slideIn-leave-active {
  transition: all 0.5s;
}
.slideIn-enter, .slideIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(300px);
}
</style>
