<template>
  <div class="hello">
    <h1>{{ info }}</h1>
    <input type="text" @keyup.enter="sendData($event)" />
    <p v-for="(item,index) in listData" :key="index">{{item.id + '==' + item.name}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { emit } from "cluster";
interface Feature {
  id: number;
  name: string;
}

@Component
export default class AboutDetail extends Vue {
  @Prop({ type: String, required: true })
  private info!: string;
  constructor() {
    super();
  }
  listData: Feature[] = [{ id: 1, name: "抢手机" }, { id: 2, name: "买电脑" }];

  // watch监听info的变化
  @Watch("listData", { deep: true })
  onUserChange(newVal, oldVal) {
    alert('新值:'+JSON.stringify(newVal) +'\n旧值:'+ JSON.stringify(oldVal));
  }

  // 写事件函数
  @Emit("abc") //  @Emit('abc') 定义为abc 父组件接收事件就是abc,不传事件名就是下面的函数名sendData
  private sendData(e: any) {
    // console.log(e);
    this.listData.push({ id: 1, name: e.target.value });
    e.target.value = "";
    // return 就是父组件事件函数的参数
    return this.listData;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
