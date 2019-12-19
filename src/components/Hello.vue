<template>
  <div class="hello">
    <el-form :inline="true">
      <el-form-item label="Name">
        <el-input v-model="name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="sirname">
        <el-input v-model="sirname" placeholder="sirname"></el-input>
      </el-form-item> 
      <el-button type="primary" @click="addUser">Submit</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      sirname: '',
      tableData: [],
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '60px'
    }
  },
  // created(){
  //    this.$http.post('/api/user/userList', {})
  //     .then((response) => {
  //       console.log(response);
  //       if(response.status === 200){
  //         this.tableData = response.data;
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       this.$message.error('loading failed!');
  //     });
  // },
  methods: {
    addUser() {
      var name = this.name;
      var sirname = this.sirname;
      this.$http.post('http://127.0.0.1:3000/api/user/addUser', {
        name: name,
        sirname: sirname
      })
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          this.$message({
            message: `Hello ${name} you have added successfully!`,
            type: 'success'
          });
          this.userList();
        }
      })
      .catch(function (error) {
        console.log(error);
        this.$message.error('Add failed!');
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
