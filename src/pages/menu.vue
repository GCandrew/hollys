<template>
    <div class="container">
      <!-- 좌측 사이드바 -->
      <Sidebar :menu="sbmenuItems" />
  
      <!-- 우측 메인 콘텐츠 -->
      <div class="main-content">
        <h1>Menu Page</h1>
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  
  export default {
    name: "Menu",
    components: {
      Sidebar
    },
    data() {
      return {
        sbmenuItems: [
          { text: 'COFFEE', url: '/COFFEE' },
          { text: '라떼/초콜릿/티', url: '/LatteChocolateTea' },
          { text: '할리치노/빙수', url: '/membership' },
          { text: '스무디/주스', url: '/news' },
          { text: '스파클링', url: '/store' },
          { text: '푸드', url: '/about' },
          { text: 'MD상품', url: '/mdproduct'},
          { text: 'MD식품', url: '/mdfood'}
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* 전체 레이아웃을 좌우로 배치 */
  .container {
    display: flex;  /* 좌우 정렬 */
    height: 100vh;  /* 화면 높이 맞춤 */
  }
  
  /* 사이드바 스타일 */
  .sidebar {
    width: 250px;  /* 사이드바 너비 */
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  /* 메인 콘텐츠 스타일 */
  .main-content {
    flex-grow: 1; /* 나머지 공간을 차지 */
    padding: 20px;
  }
  </style>