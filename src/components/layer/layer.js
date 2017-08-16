import style from './layer.less'
import tpl from './layer.tpl'

let arr = [1,2,3,4,5]
export default {
  name: 'layer',
  tpl : tpl({name: 'elvinlong'}),
  arr: [...arr, 5],
  str: `hello ${arr.toString()}`
}