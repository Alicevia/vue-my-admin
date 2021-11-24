import { createApp } from 'vue'
import { create, NButton, NCol, NForm, NFormItem, NInput, NRow } from 'naive-ui'
import App from './App.vue'
import router from './router'

const naive = create({
  components: [NButton, NForm, NFormItem, NInput, NRow, NCol],
})
const app = createApp(App)
app.use(router).use(naive).mount('#app')
