
  <template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menu" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div>side bar menu1</div>
    <div>side bar menu2</div>
    <div>side bar menu3</div>
  </template>
  
  <script>
  export default {
    props: {
      menu: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 50px;
    background-color: #b72e2e;
    padding: 10px;
  }
  </style>