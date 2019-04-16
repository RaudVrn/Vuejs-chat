<script>
export default {
  name: "ChatInput",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    postMessage() {
      if (this.text.length !== 0 && !this.isOnlySpaceString()) {
        this.$emit("onMessagePosted", {
          id: this.messages[this.messages.length - 1].id + 1,
          created_at: new Date().toLocaleString(),
          created_by: this.currentUser,
          text: this.text
        });
      }
      document.querySelector(".chat-input__input").value = "";
      this.text = "";
    },
    isOnlySpaceString() {
      return /^\s+$/.test(this.text);
    }
  }
};
</script>

<template>
  <div class="chat-input__wrapper">
    <form class="chat-input__form">
      <input
        class="chat-input__input"
        placeholder="Введите сообщение"
        v-model="text"
      />
      <button class="chat-input__button" @click.prevent="postMessage">></button>
    </form>
  </div>
</template>

<style scoped>
.chat-input__wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #000;
}

.chat-input__form {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.chat-input__input {
  width: 250px;
  height: 20px;
}
</style>
