<script>
import ServicesItem from "../components/ServicesItem";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ServicesList",
  components: {
    ServicesItem
  },
  computed: {
    ...mapState(["services", "currentServicesList"])
    // currentServicesList() {
    //   console.log(this.$route.meta.x);
    //   if (this.$route.name === 'services'){
    //     return this.$store.getters.getCurrentItems('all')
    //   }
    //   if (this.$route.name.includes('gift')){
    //     return this.$store.getters.getCurrentItems('gift')
    //   }
    //   if (this.$route.name.includes('transfer')){
    //     return this.$store.getters.getCurrentItems('transfer')
    //   }
    //   if (this.$route.name.includes('education')){
    //     return this.$store.getters.getCurrentItems('education')
    //   }
    // }
  },
  watch: {
    $route(to) {
      this.getCurrentList(to.name);
    }
  },
  mounted() {
    this.getCurrentList(this.$route.name);
  },
  methods: {
    ...mapMutations(["changeCurrentServicesList"]),
    getCurrentList(name) {
      switch (name) {
        case "services-gift":
          this.$store.commit("changeCurrentServicesList", "gift");
          break;
        case "services-transfer":
          this.$store.commit("changeCurrentServicesList", "transfer");
          break;
        case "services-education":
          this.$store.commit("changeCurrentServicesList", "education");
          break;
        default:
          this.$store.commit("changeCurrentServicesList", "all");
      }
    }
  }
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in currentServicesList" :key="index">
        <services-item :item="item"></services-item>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  width: 100%;
  list-style: none;
  padding: 0;
}

li {
  width: 95%;
  height: 50px;
  border: 1px solid #000;
  margin: 15px auto;
  padding: 5px;
}
</style>
