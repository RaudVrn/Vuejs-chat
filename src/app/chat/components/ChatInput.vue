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
      if (this.text.length !== 0 && !this.isOnlySpaceChar()) {
        this.$emit("onMessagePosted", {
          id: this.messages[this.messages.length - 1].id + 1,
          created_at: new Date().toLocaleString(),
          created_by: this.currentUser,
          text: this.text
        });
        document.querySelector(".chat-input__input").value = "";
        this.text = "";
      }
    },
    isOnlySpaceChar() {
      return /^\s+$/.test(this.text);
    }
  }
};
</script>

<template>
  <div class="chat-input__wrapper">
    <form class="chat-input__form">
      <textarea
        class="chat-input__input"
        placeholder="Введите сообщение"
        v-model="text"
        @keydown.enter.exact.prevent="postMessage"
      ></textarea>
      <!--<input
        class="chat-input__input"
        placeholder="Введите сообщение"
        v-model="text"
        @keydown.alt.enter.prevent
        @keydown.ctrl.enter.prevent
        @keydown.shift.enter.exact.prevent="function() {
            this.text = this.text + '\\n';
        }"
        @keydown.enter.exact.prevent="postMessage"
      />-->
      <button class="chat-input__button" @click.prevent="postMessage">
        >
      </button>
    </form>
  </div>
</template>

<style scoped>
.chat-input__wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background: beige;
  border-top: 1px solid #000;
}

.chat-input__form {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.chat-input__input {
  padding-right: 5px;
  padding-left: 5px;
  width: 250px;
  height: 20px;
  resize: none;
  font-size: 16px;
  text-align: right;
}
</style>
