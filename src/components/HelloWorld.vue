<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" @keyup.enter="sendData($event)" />
    <p v-for="(item,index) in listData" :key="index">{{item.id + '==' + item.name}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
// 一般数据返回接口
interface Feature {
  id: number;
  name: string;
}
// 泛型数据返回接口
interface Result<T> {
  data: T;
}
function getData<T>(): Promise<Result<T>> {
  // 模拟数据
  let data: any = [
    { id: 1, name: "路附近啊" },
    { id: 2, name: "法律界阿拉" }
  ];
  return Promise.resolve<Result<T>>({ data });
}
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  constructor() {
    super();
    // this.features[0].id
  }
  listData: Feature[] = [
    { id: 1, name: "路附近啊" },
    { id: 2, name: "法律界阿拉" }
  ];

  async mounted() {
    // this.features = (await getData<Feature[]>()).data;
    const res = await axios.get<Feature[]>("/api/getFeature");
    console.log("测试接口:", res);
    this.listData = res.data;
  }

  // 写函数
  sendData(e: any) {
    // console.log(e);
    this.listData.push({ id: 1, name: e.target.value });
    e.target.value = "";
  }

  get count() {
    return this.listData.length;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
