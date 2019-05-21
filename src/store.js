import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    services: [
      {
        id: 1,
        type: "transfer",
        text: "test text"
      },
      {
        id: 2,
        type: "education",
        text: "test text"
      },
      {
        id: 3,
        type: "transfer",
        text: "test text"
      },
      {
        id: 4,
        type: "gift",
        text: "test text"
      },
      {
        id: 5,
        type: "education",
        text: "test text"
      },
      {
        id: 6,
        type: "transfer",
        text: "test text"
      },
      {
        id: 7,
        type: "gift",
        text: "test text"
      }
    ],
    currentServicesList: []
  },
  mutations: {
    changeCurrentServicesList(state, payload) {
      if (
        payload === "gift" ||
        payload === "transfer" ||
        payload === "education"
      ) {
        state.currentServicesList = state.services.filter(
          serviceItem => serviceItem.type === payload
        );
      } else {
        state.currentServicesList = state.services;
      }
    }
  },
  actions: {},
  getters: {
    // getCurrentItems: ({services}) => (type) => {
    //   if (type === 'gift' || type === 'transfer' || type === 'education') {
    //     return services.filter(serviceItem => serviceItem.type === type);
    //   }
    //   return services;
    // }
  }
});
