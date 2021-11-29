import { createApp } from 'vue'
import {
  create,
  NButton,
  NCol,
  NForm,
  NFormItem,
  NInput,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  NRow,
} from 'naive-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/router/permission'

const naive = create({
  components: [
    NButton,
    NForm,
    NFormItem,
    NInput,
    NRow,
    NCol,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NLayoutSider,
  ],
})
const app = createApp(App)
app.use(router).use(store).use(naive).mount('#app')
