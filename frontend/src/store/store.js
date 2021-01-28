/* eslint-disable no-console */
import card from "../api/books.json";

/* eslint-disable no-alert */
export const createStore = () => {
  const store = {
    onClick() {
      alert("Это Mobx!");
    },
    searchBookGeneral(value) {
      const elements = card.filter((item) => item.title === value);
      console.log(elements);
    },
  };

  return store;
};
