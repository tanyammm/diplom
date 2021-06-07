/* eslint-disable no-console */
import card from "../api/books.json";
import sendEmailFeedback from "../api/feedback-modal";

export const createStore = () => {
  const store = {
    /* модальное окно обратной связи */
    showModal: false,
    botModal: "",
    themeModal: "",
    themeModalInput: "",

    openShowModal() {
      this.showModal = true;
    },

    handleCancel() {
      this.showModal = false;
    },

    setTheme(value) {
      this.themeModal = value;
      this.themeModalInput = this.themeModal;
    },

    setThemeInput(value) {
      this.themeModalInput = `${this.themeModal}: ${value}`;
    },

    handleOk(value) {
      sendEmailFeedback(
        value.name,
        value.email,
        value.phone,
        this.themeModalInput,
        value.message,
        value.file
      );
      this.showModal = false;
    },

    searchBotModal(value) {
      this.botModal = value;
    },

    /* сохранение информации об ошибках */
    errorModal: "",
    setError(value) {
      this.errorModal = value;
    },

    /* название категории каталога книг */
    selectBookCategory: "Каталог книг",
    setBookCategory(value) {
      this.selectBookCategory = value;
    },

    /* поиск книг по каталогу */
    elements: [],
    searchBookGeneral(value) {
      this.elements = card.filter((item) => item.title === value);
    },

    /* сумма покупок */
    quantityProducts: 0,

    /* количество покупок в корзине */
    numberPurchases: 0,

    clearCount() {
      this.numberPurchases = 0;
      this.quantityProducts = 0;
    },

    addShopping(value) {
      this.numberPurchases += 1;
      this.quantityProducts += value;
    },

    /* статус заказа */
    orderStatus: true,
    setOrderStatus(value) {
      this.orderStatus = value;
    },

    /* данные заказчика */
    getDataBuyer(value) {
      console.log(value.name, value.surname, value.email, value.phone);
    },

    /* номер заказа */
    numberOrder: 1236,

    /* предпросмотр книги */
    numberPage: 1,
    setNumberPage(value) {
      this.numberPage += value;
    },
  };

  return store;
};
