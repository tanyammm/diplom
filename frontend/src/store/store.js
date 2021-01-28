import card from "../api/books.json";

/* eslint-disable no-alert */
export const createStore = () => {
  const store = {
    onClick() {
      alert("Это Mobx!");
    },
    elements: [],
    searchBookGeneral(value) {
      this.elements = card.filter((item) => item.title === value);
    },
  };

  return store;
};
