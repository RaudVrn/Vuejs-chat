<script>
export default {
  name: "ContentMain"
};
</script>

<template>
  <div class="content-main-wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content-main-wrapper {
  border: 1px solid #000;
  height: 600px;
  overflow-y: scroll;
}
</style>
