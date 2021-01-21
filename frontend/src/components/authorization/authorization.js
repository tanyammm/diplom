/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import user from "./img/user.png";
import padlock from "./img/padlock.png";
import "antd/dist/antd.css";
import css from "./authorization.module.css";

const Personal = () => {
  return (
    <div className={css.box}>
      <div className={css.flex}>
        <form
          className={css.form}
          action="/validation-form/authorization.php"
          method="POST"
        >
          <div className={css.grouple}>
            <h1 className={css.title}>Авторизация</h1>
            <label className={css.label}>Введите логин</label>
            <div className={css.input}>
              <img src={user} alt="img" />
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
            <label className={css.label}>
              Введите пароль
              <div className={css.tooltip}>
                {/* <a className={css.icon}> 
                  <i className={css.fa fa-question-circle} aria-hidden="true" />
                </a>
                <span className={css.tooltiptext}>
                  Если вы забыли пароль, то обратитесь к администратору
                </span> */}
              </div>
            </label>
            <div className={css.input}>
              <img src={padlock} alt="img" />
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
              У вас нет аккаунта?
              <Link to="/library/register">- зарегистрируйтесь!</Link>
            </label>
            <button className={css.login} type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
