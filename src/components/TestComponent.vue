<template>
  <div class="hello">
    <h1>{{ test }}</h1>
  </div>
</template>

<script lang="ts">
import { /* Component, */ Prop, Vue } from "vue-property-decorator";

// 自己实现一个Component

function Component(options: any) {
  return function(target: any) {
    return Vue.extend(options);
  };
}

@Component({
  props: {
    test: { type: String, default: "" }
  }
})
export default class TestComponent extends Vue { }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
