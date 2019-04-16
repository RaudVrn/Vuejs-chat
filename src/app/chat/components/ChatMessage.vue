<script>
export default {
  name: "ChatMessage",
  props: {
    message: {
      type: Object,
      default: () => {}
    },
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    messageClass() {
      if (this.message.created_by.id === this.currentUser.id) {
        return "message--self";
      }
    }
  }
};
</script>

<template>
  <div :class="[messageClass(), 'message']">
    <p class="message__date">
      {{ message.created_at.slice(0, 10) }} в
      {{ message.created_at.slice(12, 17) }}
    </p>
    <!--<p class="message__author">{{message.created_by.name}}</p>-->
    <p class="message__text">{{ message.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.message {
  text-align: left;
  margin: 0;

  &--self {
    text-align: right;
  }
}

.message__date {
  color: #a2a2a2;
  font-size: 12px;
  margin: 0;
}
.message__text {
  color: #222;
  margin: 0;
}
</style>
