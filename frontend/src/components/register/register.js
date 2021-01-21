/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import user from "./img/user.png";
import envelopes from "./img/envelopes.png";
import padlock from "./img/padlock.png";
import "antd/dist/antd.css";
import css from "./register.module.css";

const Register = () => {
  return (
    <div className={css.box}>
      <div className={css.flex}>
        <form
          className={css.form}
          action="/validation-form/authorization.php"
          method="POST"
        >
          <div className={css.grouple}>
            <h1 className={css.title}>Регистрация</h1>
            <label className={css.label}>Введите логин</label>
            <div className={css.input}>
              <div className={css.tooltip}>
                <img src={user} alt="img" />
                <span className={css.tooltiptext}>
                  Логин должен быть уникальным и иметь длину от 3 до 40
                  символов. В логине допускаются латинские строчные и заглавные
                  буквы, цифры, точки, символ нижнего подчёркивания и тире
                </span>
              </div>
              <input
                className={css.eMailAndPassword}
                type="text"
                name="login"
                id="login"
                placeholder="login"
                required
              />
              <span className={css.focusInput} />
            </div>
            <label className={css.label}>Введите электронную почту</label>
            <div className={css.input}>
              <div className={css.tooltip}>
                <img src={envelopes} alt="img" />
                <span className={css.tooltiptext}>
                  Введите адрес своей электронной почты
                </span>
              </div>
              <input
                className={css.eMailAndPassword}
                name="email"
                id="email"
                placeholder="email"
                required
              />
              <span className={css.focusInput} />
            </div>
            <label className={css.label}>Введите пароль</label>
            <div className={css.input}>
              <div className={css.tooltip}>
                <img src={padlock} alt="img" />
                <span className={css.tooltiptext}>
                  Пароль должен иметь длину от 6 до 50 символов, содержать хотя
                  бы одну латинскую прописную и одну строчную букву, а также
                  цифру
                </span>
              </div>
              <input
                type="password"
                className={css.eMailAndPassword}
                name="password"
                id="password"
                placeholder="password"
                required
              />
              <span className={css.focusInput} />
            </div>
            <label className={css.label1}>
              У вас есть аккаунт?
              <Link to="/library/authorization">- авторизуйтесь!</Link>
            </label>
            <button className={css.login} type="submit">
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
