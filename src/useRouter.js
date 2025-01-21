import { createMemoryHistory, createRouter } from 'vue-router'

import Menu from './pages/Menu.vue'
import MenuDetail from './pages/MenuDetail.vue'
import black from './pages/black.vue'
import NitroVanillaCream from './pages/NitroVanillaCream.vue'


const routes = [
  { path: '/', component: Menu },
  { path: '/detail', component: MenuDetail },
  { path: '/black', component: black },
  { path: '/NitroVanillaCream', component: NitroVanillaCream},
  
]


export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;