import style from './style.less'
import template from './view.html'

const PACKAGE_JSON = process.skyeye.PACKAGE_JSON

export default {
  template,
  data () {
    return {
      style,
      name: PACKAGE_JSON.name,
      author: PACKAGE_JSON.author,
      version: PACKAGE_JSON.version,
      description: PACKAGE_JSON.description,
      dependencies: PACKAGE_JSON.dependencies,
      addons: PACKAGE_JSON._addons
    }
  }
}
