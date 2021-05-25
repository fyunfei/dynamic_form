import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    widgets: [],
    formConfig: {}, // 表单全局配置
    config: {
      formItem: {}, // 表单行配置
      options: {} // 组件配置项
    }, // 当前选中的组件的相关配置
    configable: false // 当前是否选中组件
  },
  mutations: {
    addWidgets (state, widget) {
      state.widgets.push(widget)
    },
    addConfig (state, config) {
      state.config = config
      state.formConfig = config.formConfig
    },
    changeConfigable (state, status) {
      state.configable = status
    }
  },
  actions: {},
  modules: {}
})
