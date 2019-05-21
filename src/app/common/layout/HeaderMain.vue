<script>
export default {
  name: "HeaderMain"
};
</script>

<template>
  <header>
    <router-link to="/">Home</router-link>
    <router-link to="services">To all services</router-link>
    <router-link to="services-gift">Gifts</router-link>
    <router-link to="services-transfer">Transfer</router-link>
    <router-link to="services-education">Education</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border: 1px solid #000;
}
button {
  border: 1px solid #000;
  width: 150px;
  height: 50px;
  margin: 10px 30px;
  cursor: pointer;
}
a {
  display: block;
  border: 1px solid #000;
  width: 150px;
  height: 50px;
  margin: 10px 30px;
  line-height: 50px;
}
</style>
