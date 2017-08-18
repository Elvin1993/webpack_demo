import style from './layer.less'
import tpl from './layer.tpl'

let arr = [1,2,3,4]

console.log('i am a error')

export default {
  name: 'layer',
  tpl : tpl({name: 'elvinlong2'}),
  arr: [...arr, 5],
  str: `hello ${arr.toString()}`
}