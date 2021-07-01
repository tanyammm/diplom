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

    /* сохранение информации об ошибках в форме обратной связи */
    errorModal: "",
    setErrorModal(value) {
      this.errorModal += JSON.stringify(value);
    },

    /* сохранение информации об ошибках в форме авторизации */
    errorAuthorization: "",
    setErrorAuthorization(value) {
      this.errorAuthorization += JSON.stringify(value);
    },

    /* сохранение информации об ошибках в форме регистрации */
    errorRegister: "",
    setErrorRegister(value) {
      this.errorRegister += JSON.stringify(value);
    },

    /* сохранение информации об ошибках при заполнении заявки ЦСИиРБТ */
    errorCentre: "",
    setErrorCentre(value) {
      this.errorCentre += JSON.stringify(value);
    },

    /* сохранение информации об ошибках при заполнении заявки на книгу в дар */
    errorDonation: "",
    setErrorDonation(value) {
      this.errorDonation += JSON.stringify(value);
    },

    /* сохранение информации об ошибках при заполнении заявки на обходной лист */
    errorList: "",
    setErrorList(value) {
      this.errorList += JSON.stringify(value);
    },

    /* сохранение информации об ошибках при покупке книг */
    errorBuy: "",
    setErrorBuy(value) {
      this.errorBuy += JSON.stringify(value);
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

    /* массив элементов в корзине */
    basket: [],
    index: 0,

    clearCount() {
      this.numberPurchases = 0;
      this.quantityProducts = 0;
      this.basket = [];
      this.index = 0;
    },

    addShopping(value) {
      this.numberPurchases += 1;
      this.quantityProducts += value.price;
      this.index = card.findIndex((item) => value.id === item.id);
      this.basket.push(card[this.index]);
    },

    /* массив книг */
    dataSource: card,
    setDataSource(value) {
      this.dataSource = value;
    },

    /* статус заказа */
    orderStatus: true,
    setOrderStatus(value) {
      this.orderStatus = value;
    },

    /* данные заказчика в Книге в дар */
    getDataBuyer(value) {
      console.log(value.name, value.book, value.email, value.phone);
    },

    /* номер заказа */
    numberOrder: 1236,

    /* предпросмотр книги */
    numberPage: 1,
    setNumberPage(value) {
      this.numberPage += value;
    },

    /* авторизация и регистрация */
    sendAuthorization(value) {
      console.log(value.login, value.password);
    },
    sendRegister(value) {
      console.log(
        value.surname,
        value.name,
        value.patronymic,
        value.phone,
        value.email,
        value.password
      );
    },

    /* данные студента при заказе обходного листа */
    getDataStudent(value) {
      console.log(
        value.name,
        value.phone,
        value.email,
        value.group,
        value.faculty,
        value.educational,
        value.funding
      );
    },
    /* статус заказа обходного листа */
    listStatus: true,
    setListStatus(value) {
      this.listStatus = value;
    },

    /* данные заказчика при подаче заявки в ЦСИиРБТ ВоГУ */
    getDataCenter(value) {
      console.log(
        value.organization,
        value.name,
        value.phone,
        value.email,
        value.message
      );
    },
    /* статус заказа в ЦСИиРБТ ВоГУ */
    centerStatus: true,
    setCenterStatus(value) {
      this.centerStatus = value;
    },

    /* администратор */
    administrator: false,
    setAdministrator(value) {
      this.administrator = value;
    },

    /* статистика */
    quantityVisitors: 7,
    quantityBuy: 1,
    quantityDownloading: 63,
  };

  return store;
};
