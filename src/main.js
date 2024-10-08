import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify 관련 임포트
import { createVuetify } from 'vuetify'
import 'vuetify/styles'  // Vuetify 스타일
import { aliases, mdi } from 'vuetify/iconsets/mdi'  // 아이콘 설정

//createApp(App).mount('#app')


const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })
  
  const app = createApp(App)
  
  app.use(vuetify)  // Vuetify 플러그인 사용
  
  app.mount('#app')