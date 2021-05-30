/* eslint-disable no-undef */
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

    /* ВРЕМЕННО */
    setCheckbox(e) {
      console.log(`${e.target.checked}`);
      if (e.target.checked === true) {
        console.log(`нажат чекбокс`);
      }
    },

    selectBookCategory: "Каталог книг",

    setBookCategory(value) {
      this.selectBookCategory = value;
    },

    elements: [],
    searchBookGeneral(value) {
      this.elements = card.filter((item) => item.title === value);
    },
  };

  return store;
};
