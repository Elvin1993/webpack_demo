import layer from './components/layer/layer.js'
import common from './styles/common.css'

const App = function() {
  var dom = document.getElementById('app');
  dom.innerHTML = layer.tpl
}

new App()