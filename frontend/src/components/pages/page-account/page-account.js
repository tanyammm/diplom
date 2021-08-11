import React from "react";
import { Button, Popconfirm } from "antd";
import { useHistory } from "react-router-dom";
import { StyledTitle, StyledText } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-account.module.css";

const PageAccount = () => {
  const { user, setUser } = useRootData((store) => ({
    user: store.mainStore.user,
    setUser: store.mainStore.setUser,
  }));

  const history = useHistory();
  const exitLogin = () => history.push("/diplom/authorization");

  const onExit = () => {
    setUser(false);
    exitLogin();
  };

  return (
    <div className={css.account}>
      {user ? (
        <>
          <StyledTitle level={2}>Личный кабинет</StyledTitle>
          <div className={css.block}>
            <StyledText>Вы вошли в личный кабинет как пользователь!</StyledText>
            <Popconfirm
              title="Вы уверены, что хотите выйти?"
              onConfirm={onExit}
              okText="Да"
              cancelText="Нет"
            >
              <Button type="primary" danger>
                Выйти
              </Button>
            </Popconfirm>
          </div>
        </>
      ) : (
        <>{exitLogin()}</>
      )}
    </div>
  );
};

export default PageAccount;
