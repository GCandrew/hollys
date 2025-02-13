<template>
    <div class="container">
      <!-- 좌측 사이드바 -->
      <Sidebar :menu="sbmenuItems" />
  
      <!-- 우측 메인 콘텐츠 -->
      <div class="main-content">
        <h1>coffee</h1>
        <router-view />
      </div>
    </div>
  </template>
  