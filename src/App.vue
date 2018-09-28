<template>
  <div id="app">
    <MyDoc/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyDoc from "./components/MyDoc";
@Component({
  components: {
    MyDoc
  }
})
export default class App extends Vue {}
</script>
