import axios from "axios";

export const addNews = (title, text, img, date) =>
  axios({
    method: "post",
    url: "http://localhost:8000/news/add",
    data: {
      title,
      text,
      img,
      date,
    },
  });

export const fetchNews = () =>
  axios({
    method: "get",
    url: "http://localhost:8000/news/red",
  }).then((res) => {
    return res.data;
  });

export const fetchNewsId = (id) =>
  axios({
    method: "post",
    url: "http://localhost:8000/news/redid",
    data: {
      id,
    },
  }).then((res) => {
    return res.data;
  });

export const deleteNews = (id) =>
  axios({
    method: "post",
    url: "http://localhost:8000/news/delete",
    data: {
      id,
    },
  });

export const editNews = (id, title, text, img, date) =>
  axios({
    method: "post",
    url: "http://localhost:8000/news/update",
    data: {
      id,
      title,
      text,
      img,
      date,
    },
  });
