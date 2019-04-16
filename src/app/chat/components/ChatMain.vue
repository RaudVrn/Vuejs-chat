<script>
import ChatMessage from "@/app/chat/components/ChatMessage";
import ChatInput from "@/app/chat/components/ChatInput";

export default {
  name: "ChatMain",
  components: {
    ChatInput,
    ChatMessage
  },
  props: {
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      messages: [
        {
          id: 666,
          created_at: "12.04.2019, 14:47:55",
          created_by: {
            id: 4222,
            name: "Velsevul"
          },
          text: "Привет, убери что-нибудь откуда-нибудь"
        },
        {
          id: 667,
          created_at: "12.04.2019, 14:50:30",
          created_by: {
            id: 4221,
            name: "Raud"
          },
          text: "Где макет?"
        }
      ]
    };
  },
  methods: {
    addToMessages($event) {
      this.messages.push($event);
    }
  }
};
</script>

<template>
  <aside class="chat">
    <ul class="chat__message-list">
      <li
        class="chat__message-item"
        v-for="(message, index) in messages"
        :key="index"
      >
        <chat-message :message="message" :currentUser="currentUser">
        </chat-message>
      </li>
    </ul>
    <chat-input
      :messages="messages"
      :currentUser="currentUser"
      @onMessagePosted="addToMessages"
    >
    </chat-input>
  </aside>
</template>

<style scoped lang="scss">
aside {
  position: relative;
  height: 400px;
  border: 1px solid #000;
  overflow-y: scroll;
}
.chat__message-list {
  list-style: none;
  padding: 5px;
  margin: 5px;
}

.chat__message-item {
  margin-bottom: 15px;
  &:not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }
}
</style>
