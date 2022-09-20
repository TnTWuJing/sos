<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
    axios({
      url:process.env.VUE_APP_BASE_API+'/',
      method:"get"
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>
