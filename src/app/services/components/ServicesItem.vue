<script>
export default {
  name: "ServicesItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<template>
  <div>
    <p>{{ item.id }}</p>
    <p>{{ item.type }}</p>
    <p>{{ item.text }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
}

p {
  width: 120px;
}
</style>
