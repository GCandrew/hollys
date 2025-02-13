<template>
    <div class="sidebar">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      menu: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  router-link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  router-link:hover {
    color: #007bff;
  }
  </style>