import { Component, Vue } from "vue-property-decorator";
import template from "./MyDoc.vue";

@Component({
  mixins: [template]
})
export default class MyDoc extends Vue {
  // @ts-ignore
  doc = template.__docs;
}
