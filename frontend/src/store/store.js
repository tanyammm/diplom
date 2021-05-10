/* eslint-disable no-console */
import card from "../api/books.json";

export const createStore = () => {
  const store = {
    showModal: false,

    openShowModal() {
      this.showModal = true;
    },

    handleCancel() {
      this.showModal = false;
    },

    handleOk(values) {
      console.log(values);
      /* ВРЕМЕННО */
      this.showModal = false;
    },

    elements: [],
    searchBookGeneral(value) {
      this.elements = card.filter((item) => item.title === value);
    },
  };

  return store;
};
