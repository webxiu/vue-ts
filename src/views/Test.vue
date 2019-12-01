<template>
  <div class="home">
    <TestComponent :test="test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import TestComponent from "@/components/TestComponent.vue";
@Component({
  components: {
    TestComponent
  }
})
export default class About extends Vue {
  test = 'test888888888888'
  
}

</script>
