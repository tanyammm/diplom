import card from "../api/books.json";
import sendEmailFeedback from "../api/feedback-modal";

export const createStore = () => {
  const store = {
    showModal: false,
    // nameModal: "",
    // emailModal: "",
    // phoneModal: "",
    // messageModal: "",
    botModal: "",

    openShowModal() {
      this.showModal = true;
    },

    handleCancel() {
      this.showModal = false;
    },

    handleOk(value) {
      // this.nameModal = value.name;
      // this.emailModal = value.email;
      // this.phoneModal = value.phone;
      // this.messageModal = value.message;
      sendEmailFeedback(value.name, value.email, value.phone, value.message);
      this.showModal = false;
    },

    searchBotModal(value) {
      this.botModal = value;
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
