import axios from "axios";

export const fetchBooks = () =>
  axios({
    method: "get",
    url: "http://localhost:8000/book/red",
  }).then((res) => {
    return res.data;
  });

export const fetchBooksId = (id) =>
  axios({
    method: "post",
    url: "http://localhost:8000/book/redid",
    data: {
      id,
    },
  }).then((res) => {
    return res.data;
  });
