import axios from "axios";

export const addUsers = (
  surname,
  name,
  patronymic,
  telephone,
  email,
  password
) =>
  axios({
    method: "post",
    url: "http://localhost:8000/users/add",
    data: {
      surname,
      name,
      patronymic,
      telephone,
      email,
      password,
    },
  });

export const fetchUsers = () =>
  axios({
    method: "get",
    url: "http://localhost:8000/users/red",
  }).then((res) => {
    return res.data;
  });

export const fetchUsersId = (id) =>
  axios({
    method: "post",
    url: "http://localhost:8000/users/redid",
    data: {
      id,
    },
  }).then((res) => {
    return res.data;
  });

export const deleteUsers = (id) =>
  axios({
    method: "post",
    url: "http://localhost:8000/users/delete",
    data: {
      id,
    },
  });

export const editUsers = (
  id,
  surname,
  name,
  patronymic,
  telephone,
  email,
  password
) =>
  axios({
    method: "post",
    url: "http://localhost:8000/users/update",
    data: {
      id,
      surname,
      name,
      patronymic,
      telephone,
      email,
      password,
    },
  });
