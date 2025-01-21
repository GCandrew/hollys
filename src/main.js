/*import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 라우터 가져오기

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
  app.use(router); // Vue Router 사용
  app.mount('#app')
main.js에서 설정 파일을 확인합니다. 예를 들어, 아래와 같이 라우터를 한 번만 가져오도록 설정하세요.

  */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 통합된 라우터 파일

const app = createApp(App);

app.use(router); // 라우터 연결
app.mount('#app'); // 앱 마운트