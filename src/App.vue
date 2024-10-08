<template>

<link rel="stylesheet" href="https://www.hollys.co.kr/websrc/images/layout/logo_210302.gif">

<header>
  <h1 class="logo-bar con-min-width">
    <div class="text-align-center con">
      <a href="#" class="logo-bar__logo">
        <span class="ico-1"><i class="fa-solid fa-plane"></i></span>
        <span>
         <img src="https://www.hollys.co.kr/websrc/images/layout/logo_210302.gif">
        </span>
      </a>
    </div>
  </h1>

  <h2 class="menu-bar con-min-width">
    <div class="con">
      <nav class="menu-bar__menu-box-1 text-align-center">
        <ul class="inline-grid">
          <li><a href="#" class="block">Home</a></li>
          <li><a href="#" class="block">Read</a></li>
          <li><a href="#" class="block">Write</a></li>
          <li><a href="#" class="block">About</a></li>
          <li><a href="#" class="block">SNS</a></li>
          <li><a href="#" class="block">Study</a></li>
          <li><a href="#" class="block">Exit</a></li>
          
        </ul>
      </nav>
    </div>
  </h2>
</header>

</template>

<script>

</script>

<style scoped>

/* 폰트 적용 시작 */
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

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
  width: 100%;
  max-width: var(--site-width); /* 최대 폭을 제한 */
  padding: 0 10px;
}

/*min-width: var(--site-width);
padding: 0 10px; */

.con {
  width: 100%;
  max-width: var(--site-width);
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
}

.menu-bar__menu-box-1 > ul > li:hover > a {
  color: red;
  text-decoration: underline;
}
/* 메뉴바 끝 */

/* 커스텀 끝 */



</style>