import style from './layer.less'

let arr = [1,2,3,4,5]
export default {
  name: 'layer',
  tpl: [...arr, 5],
  str: `hello ${arr.toString()}`
}