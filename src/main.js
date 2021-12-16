import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './MyApp.vue'
import router from './router'
import store from './store'
import '@/router/permission'
import './style/index.scss'
import i18n from './i18n/index'
// const naive = create({
//   components: [
//     NButton,
//     NForm,
//     NFormItem,
//     NInput,
//     NRow,
//     NCol,
//     NLayout,
//     NLayoutContent,
//     NLayoutHeader,
//     NLayoutSider,
//     NLayoutFooter,
//     NH2,
//     NConfigProvider,
//     NMessageProvider,
//   ],
// })
const app = createApp(App)
app.use(naive).use(store).use(i18n).use(router).mount('#app')
