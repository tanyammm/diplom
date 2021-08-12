/* eslint-disable default-case */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import sendEmailFeedback from "../api/feedback-modal";
import {
  addNews,
  fetchNews,
  fetchNewsId,
  deleteNews,
  editNews,
} from "../api/news";
import { fetchBooks, fetchBooksId } from "../api/books";
import { fetchUsers, deleteUsers } from "../api/users";

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

    /* сумма покупок */
    quantityProducts: 0,

    /* количество покупок в корзине */
    numberPurchases: 0,

    /* массив элементов в корзине */
    basket: [],
    arrayIndex: [],

    /* очищение корзины */
    clearCount() {
      this.numberPurchases = 0;
      this.quantityProducts = 0;
      this.basket = [];
      this.arrayIndex = [];
    },

    /* статус заказа */
    orderStatus: true,
    setOrderStatus(value) {
      this.orderStatus = value;
    },

    /* данные заказчика во время покупки книг */
    getDataShopping(value) {
      sendEmailFeedback(value.name, value.email, value.phone);
    },

    /* данные заказчика в Книге в дар */
    getDataBuyer(value) {
      sendEmailFeedback(value.name, value.book, value.email, value.phone);
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
      sendEmailFeedback(value.login, value.password);
    },
    sendRegister(value) {
      sendEmailFeedback(
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
      sendEmailFeedback(
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
      sendEmailFeedback(
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

    /* личный кабинет */
    user: false,
    setUser(value) {
      this.user = value;
    },

    /* новости */
    /* массив новостей */
    news: [],
    setNews(value) {
      this.news = value.reverse();
    },

    /* загрузка во время добавления новости */
    loadingNewsAdd: false,
    setLoadingNewsAdd(value) {
      this.loadingNewsAdd = value;
    },

    /* добавление новости */
    onClickNewsAdd(value) {
      addNews(value.title, value.text, value.img, value.date)
        .then(() => {
          this.getNews();
          this.setLoadingNewsAdd(false);
        })
        .catch((error) => console.log("error", error));
    },

    /* загрузка новостей */
    loadingNews: true,
    setLoadingNews(value) {
      this.loadingNews = value;
    },

    /* получение всех новостей */
    getNews() {
      fetchNews()
        .then((res) => {
          this.setNews(res);
          this.setLoadingNews(false);
        })
        .catch((error) => {
          console.log("error", error);
          this.setLoadingNews(true);
        });
    },

    /* одна новость */
    newsId: [],
    setNewsId(value) {
      this.newsId = value;
    },
    getErrorNewsId: false,

    /* загрузка одной новости */
    loadingNewsId: true,
    setLoadingNewsId(value) {
      this.loadingNewsId = value;
    },

    /* получение одной новости по id */
    getNewsId(value) {
      fetchNewsId(value)
        .then((res) => {
          this.getErrorNewsId = false;
          this.setNewsId(res);
          this.setLoadingNewsId(false);
          if (this.newsId === "") {
            this.getErrorNewsId = true;
          }
        })
        .catch((error) => {
          this.getErrorNewsId = true;
          console.log("error", error);
        });
    },

    /* удаление новости */
    onClickNewsDelete(_id) {
      deleteNews(_id)
        .then(() => this.getNews())
        .catch((error) => console.log("error", error));
    },

    /* редактирование новости */
    onClickNewsEdit(value) {
      editNews(value.id, value.title, value.text, value.img, value.date)
        .then(() => this.getNews())
        .catch((error) => console.log("error", error));
    },

    /* книги */
    /* массив книг */
    books: [],
    setBooks(value) {
      this.books = value;
    },

    /* загрузка книг */
    loadingBooks: true,
    setLoadingBooks(value) {
      this.loadingBooks = value;
    },

    /* получение всех книг */
    getBooks() {
      fetchBooks()
        .then((res) => {
          this.setBooks(res);
          this.setLoadingBooks(false);
        })
        .catch((error) => {
          console.log("error", error);
          this.setLoadingBooks(true);
        });
    },

    /* одна книга */
    booksId: [],
    setBooksId(value) {
      this.booksId = value;
    },
    getErrorBooksId: false,

    /* загрузка одной книги */
    loadingBooksId: true,
    setLoadingBooksId(value) {
      this.loadingBooksId = value;
    },

    /* получение одной книги по id */
    getBooksId(value) {
      fetchBooksId(value)
        .then((res) => {
          this.getErrorBooksId = false;
          this.setBooksId(res);
          this.setLoadingBooksId(false);
          if (this.booksId === "") {
            this.getErrorBooksId = true;
          }
        })
        .catch((error) => {
          this.getErrorBooksId = true;
          console.log("error", error);
        });
    },

    /* рандом книг из каталога */
    randomBook: Math.trunc(Math.random() * (22 - 11 - 0) + 0),

    /* поиск книг по каталогу */
    titlePageSearch: "Поиск книг",
    elements: [],
    searchBookGeneral(value) {
      this.titlePageSearch = "Результаты поиска:";
      if (value === "" || value === " ") {
        this.elements = [];
      } else {
        this.elements = this.books.filter(
          (item) => item.Custom1.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      }
    },

    /* расширенный поиск книг */
    searchBookSelect(value) {
      this.titlePageSearch = "Результаты поиска:";
      if (value.text === " ") {
        this.elements = [];
      } else {
        switch (value.select) {
          case "Название":
            this.elements = this.books.filter(
              (item) =>
                item.Title.toLowerCase().indexOf(value.text.toLowerCase()) > -1
            );
            break;
          case "Автор":
            this.elements = this.books.filter(
              (item) =>
                item.Author.toLowerCase().indexOf(value.text.toLowerCase()) > -1
            );
            break;
          case "Год":
            this.elements = this.books.filter(
              (item) =>
                item.Year.toLowerCase().indexOf(value.text.toLowerCase()) > -1
            );
            break;
          case "Ключевые слова":
            this.elements = this.books.filter(
              (item) =>
                item.Custom2.toLowerCase().indexOf(value.text.toLowerCase()) >
                -1
            );
        }
      }
    },

    /* загрузка  корзины */
    loadingShopping: false,
    setLoadingShopping(value) {
      this.loadingShopping = value;
    },

    /* добавление книги в корзину */
    addShopping({ _id, price }) {
      if (this.arrayIndex.includes(_id) === false) {
        this.numberPurchases += 1;
        this.quantityProducts += Number(price);
        this.arrayIndex.push(_id);
        fetchBooksId(_id)
          .then((res) => {
            this.basket.push(res);
            this.setLoadingShopping(false);
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    },

    /* удаление книги из корзины */
    deleteShopping({ _id, price }) {
      if (this.numberPurchases > 0) {
        this.numberPurchases -= 1;
        this.quantityProducts -= Number(price);
        const index = this.basket.findIndex((item) => _id === item._id);
        this.arrayIndex.splice(index, 1);
        this.basket.splice(index, 1);
        this.setLoadingShopping(false);
      }
    },

    /* пользователи */
    /* массив пользоватлей */
    users: [],
    setUsers(value) {
      this.users = value.reverse();
    },

    /* получение всех пользователей */
    getUsers() {
      fetchUsers()
        .then((res) => {
          this.setUsers(res);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    /* удаление пользователя */
    onClickUsersDelete(_id) {
      deleteUsers(_id)
        .then(() => this.getUsers())
        .catch((error) => console.log("error", error));
    },

    /* модальное окно пользователей */
    showModalUser: false,
    openShowModalUser() {
      this.showModalUser = true;
    },

    handleCancelUser() {
      this.showModalUser = false;
    },
  };

  return store;
};
