<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = 'home 首页数据'
}

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
</script>
