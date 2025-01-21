
  <template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menu" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div>test</div>
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
    background-color: #f4f4f4;
    padding: 10px;
  }
  </style>