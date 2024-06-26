import 'virtual:uno.css'

import type { App } from 'vue'

import TestButton from './TestButton/TestButton.vue'
import TestInput from './TestInput/TestInput.vue'

export { TestButton, TestInput }

export default {
  install: (app: App) => {
    app.component('TestButton', TestButton)
    app.component('TestInput', TestInput)
  },
}
