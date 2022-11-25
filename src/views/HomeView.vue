<template>
  <div class="home">
    <el-container>
      <el-aside width="350px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<<script>
export default {
  name: 'DeyblogHomeView',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style >
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  min-height: 7pc;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 98.7vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  min-height: 8pc;
}

</style>
