<template>
  <div class="dashboard__container">
    <header-main></header-main>
    <main>
      <content-main></content-main>
      <chat-main :currentUser="currentUser"></chat-main>
    </main>
    <footer-main></footer-main>
  </div>
</template>

<script>
import HeaderMain from "@/app/common/layout/HeaderMain";
import ContentMain from "@/app/common/layout/ContentMain";
import FooterMain from "@/app/common/layout/FooterMain";
import ChatMain from "@/app/chat/components/ChatMain.vue";

export default {
  name: "DashboardMain",
  components: {
    HeaderMain,
    ContentMain,
    FooterMain,
    ChatMain
  },
  data() {
    return {
      currentUser: {
        id: 4221,
        name: "Raud"
      }
    };
  }
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 828px 322px;
  grid-gap: 20px;
  width: 1170px;
  margin: 20px auto;
}
</style>
