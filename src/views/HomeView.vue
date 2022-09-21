<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import  api from '../api/test';
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      page:1,
      size:10
    }
  },
  created(){
    api.getlist(this.page,this.size).then(response=>{
console.log(response);
    }).catch(error=>{
console.log(error);
    })

    api.getlive(this.page,this.size).then(response=>{
console.log(response);
    }).catch(error=>{
console.log(error);
    })
    // request({
    //   url:process.env.VUE_APP_BASE_API1+'/',
    //   method:"get"
    // }).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
  }
}
</script>
