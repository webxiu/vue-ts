<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- 驼峰事件名称要用短横线连接使用 -->
    <AboutDetail :info="info" @abc="sendData" />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import AboutDetail from "@/components/AboutDetail.vue";
@Component({
  components: {
    AboutDetail
  }
})
export default class About extends Vue {
  info = '关于8888详情999999'
  sendData(val){
    this.info = val[val.length-1].name
    alert('11111'+JSON.stringify(val))
  }
}

</script>
