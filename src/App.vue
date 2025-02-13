<template>

<link rel="stylesheet" href="https://www.hollys.co.kr/websrc/images/layout/logo_210302.gif">
<div>
<header>
  <!-- 고정된 메뉴바 -->
  <h1 class="logo-bar con-min-width">
    <div class="text-align-center con">
      <a href="/" class="logo-bar__logo">
        <span class="ico-1"><i class="fa-solid fa-plane"></i></span>
        <span>
        <img src="https://www.hollys.co.kr/websrc/images/layout/logo_210302.gif">
        </span>
      </a>
    </div>
  </h1>

  <h2 class="menu-bar con-min-width">
    <div class="con col-12">
      <nav class="menu-bar__menu-box-1 text-align-center">

       
     <!--  <ul class="inline-grid">
          <li v-for="item in arr" ><a href="#" class="block">{{item}}</a></li>
        </ul>
      -->
      <ul class="inline-grid">
  <li v-for="item in menuItems" :key="item.text">
    <a href="#" class="block" @click="$router.push(item.url)">{{ item.text }}</a>
  </li>
</ul>
      </nav>
    </div>
  </h2>
<!--
  <div id="app">
    Sidebar에 동적으로 메뉴 전달 25.1.25.--
    <Sidebar :menu="currentSidebarMenu" />
  <!-  <router-view />--

</div>
-->

</header>
</div>
<!-- Main Content 영역 --
 <main>
  <!- 동적으로 변경될 콘텐츠 --
  <router-view></router-view>
 </main>
</div>
-->

<!--
<div id="app">
  <div class="sidebar">
    <Sidebar :menu="currentSidebarMenu" />
  </div>

  <div class="main-content">
    <router-view />
  </div>
</div>
-->

<div id="app">
  
 


<div class="main-content">
  <router-view />
</div>
</div>


</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
/* 추가 25.1.21 */
import Sidebar from './components/Sidebar.vue';
/* sidebar 메뉴 관련 */

const route = useRoute();

const menuItems = [
    { text: 'Menu', url: '/menu' },
    { text: 'HOLLYS Mall', url: '/mall' },
    { text: 'Membership', url: '/membership' },
    { text: 'HOLLYS News', url: '/news' },
    { text: 'Store', url: '/store' },
    { text: 'HOLLYS is', url: '/about' },
];



/*
const arr = [
        'Menu',
        'HOLLYS Mall',
        'Membership',
        'HOLLYS News',
        'Store',
        'HOLLYS is',
        ]
        */


      </script>
       
<style scoped>
/* 폰트 적용 시작 */
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

#app {
  display: flex;
  height: 100vh; /* 전체 높이 차지 */
}

#app > .sidebar {
  width: 20%;  /* 1/5 크기 */
  min-width: 200px;
  background-color: orange; /* 사이드바 배경색 (선택 사항) */
}

#app > .main-content {
  width: 80%; /* 4/5 크기 */
  padding: 20px;
  background-color: #ffffff; /* 메인 영역 배경색 */
}


html {
  font-family: 'Indie Flower', cursive;
}
/* 폰트 적용 끝 */

/* 노멀라이즈 시작 */
body, ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
/* 노멀라이즈 끝 */



/* 라이브러리 시작 */
.con {
  margin-left: auto;
  margin-right: auto;
}

.block {
  display: block;
  white-space: nowrap;
  font-size: 20px !important;

}
@media (max-width: 920px) {
  .menu-bar__menu-box-1 .block {
    display: block;
    white-space: nowrap;
    font-size: 10px !important;
    transition: font-size 0.3s ease-in-out; /* 부드러운 변화 */
  }
}

.text-align-center {
  text-align: center;
}

.inline-grid {
  font-size: 0;
}

.inline-grid > * {
  font-size: 1rem;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
}
/* 라이브러리 끝 */

/* 커스텀 시작 */
:root {
  --site-width: 1200px;
}

.con-min-width {
  /* 최소 너비는 필요할 때만 사용합니다. */
  min-width: 500px;
  width: 100%;
  max-width: var(--site-width); /* 최대 폭을 제한 */
  padding: 0 10px;
}

/*min-width: var(--site-width);
padding: 0 10px; */

.con {
  width: 100%;
  max-width: var(--site-width);
  padding:0;
  
}



/* 로고바 시작 */
.logo-bar > .con {
  padding-top: 60px;
}

.logo-bar__logo {
  font-size: 5rem;
  text-decoration: underline;
}

.logo-bar__logo > span:last-child > span:nth-child(2) {
  color: red;
}
/* 로고바 끝 */

/* 메뉴바 시작 */
.menu-bar > .con {
  padding-top: 60px;
}

.menu-bar__menu-box-1 > ul > li {
  width: calc(100% / 7);
}
.menu-bar__menu-box-1 > .inline-grid {
  border: 10px solid blue;
}

.menu-bar__menu-box-1 > ul > li > a {
  font-size: 1.9rem;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  transition: font-size 0.3s ease-in-out; /* 폰트크기 애니메이션 */
}

.menu-bar__menu-box-1 > ul > li:hover > a {
  color: red;
  text-decoration: underline;
}
/* 메뉴바 끝 */

/* 커스텀 끝 */

/* 작은 화면 (예: 모바일) 
@media (max-width: 576px) {
  .menu-bar__menu-box-1 > ul > li {
    width: 100%; /* 메뉴가 세로로 배치됩니다. 
  }
}

/* 중간 화면 (예: 태블릿) 
@media (min-width: 768px) and (max-width: 991px) {
  .menu-bar__menu-box-1 > ul > li {
    width: calc(100% / 3); /* 태블릿에서는 3개의 메뉴가 한 줄에 배치됩니다. 
  }
}

/* 큰 화면 (예: 데스크탑) 
@media (min-width: 992px) {
  .menu-bar__menu-box-1 > ul > li {
    width: calc(100% / 7); /* 큰 화면에서는 7개의 메뉴가 한 줄에 배치됩니다. 
  }
}
*/
header {
  width: 90vw !important;
}


main {
  margin-top: 20px; /* 헤더와의 간격 */
  padding: 20px;    /* 메인 콘텐츠의 여백 */
  background-color: #f9f9f9; /* 배경색 */
  min-height: calc(100vh - 200px); /* 페이지 높이에 따라 유동적 조정 */
}


</style>