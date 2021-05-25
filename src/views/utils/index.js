export const formConfig = {
  'label-position': 'right'
}
/**
 * @description formItem默认配置
 */
export const formItemConfig = {
  'label-width': '100px',
  label: '输入框'
}
/**
 *
 * @param {*} type 组件name
 * @description 获取组件的默认配置
 */
const config = {
  ElInput: {
    options: {
      placeholder: '',
      'show-word-limit': false,
      maxlength: undefined,
      minlength: undefined,
      clearable: false
    }
  }
}
export const getComponentConfig = (type) => {
  return config[type]
}
