
<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => ({
        'label-width': '100px',
        required: Boolean,
        rules: Object,
        error: Object
      })
    }
  },
  data () {
    return {}
  },
  // 考虑到值是可以动态配置的，所以改为使用渲染函数创建组件
  render (h) {
    const { type, options, formItem } = this.element
    const componentData = {
      is: type,
      attrs: {},
      props: {}
    }
    for (const key in this.element.options) {
      if (key === 'placeholder' || key === 'maxlength' || key === 'minlength') {
        componentData.attrs[key] = options[key]
      } else {
        componentData.props[key] = options[key]
      }
    }
    return h(
      'ElFormItem',
      {
        props: {
          'label-width': formItem['label-width'],
          required: !!formItem.required,
          label: formItem.label
        }
      },
      [h('component', componentData)]
    )
  }
}
</script>

<style lang="scss" scoped>
</style>
