import React from "react";
import { Link } from "react-router-dom";
import { Form, message } from "antd";
import {
  FormName,
  FormEmail,
  FormPhone,
  FormCheckbox,
  FormlBot,
} from "../../reusable-components/form";
import { StyledTitle, StyledAlert } from "../../style";
import {
  StyledDiv,
  Result,
  Product,
  StyledButton,
} from "../../reusable-components";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-buy.module.css";

const PageBuy = () => {
  const {
    getDataBuyer,
    botModal,
    orderStatus,
    setOrderStatus,
    setErrorBuy,
    numberOrder,
    clearCount,
  } = useRootData((store) => ({
    getDataBuyer: store.mainStore.getDataBuyer,
    botModal: store.mainStore.botModal,
    orderStatus: store.mainStore.orderStatus,
    setOrderStatus: store.mainStore.setOrderStatus,
    setErrorBuy: store.mainStore.setErrorBuy,
    numberOrder: store.mainStore.numberOrder,
    clearCount: store.mainStore.clearCount,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataBuyer(value);
          setOrderStatus(false);
          clearCount();
        })
        .catch((error) => {
          setErrorBuy(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  const onClose = () => {
    setOrderStatus(true);
  };

  const ComponentForm = () => {
    return (
      <Form
        name="nest-messages"
        layout="vertical"
        form={form}
        className={css.form}
      >
        <FormName />
        <FormPhone />
        <FormEmail />
        <FormlBot />
        <FormCheckbox />
      </Form>
    );
  };

  const description = (
    <>
      Подробнее по заказу можно узнать в{" "}
      <Link to="/library/authorization">личном кабинете</Link>
    </>
  );

  const label = (
    <>
      Поздравляем! Вы успешно оформили заказ №{" "}
      <Link to="/library/development">{numberOrder}</Link>
    </>
  );

  return (
    <div className={css.buy}>
      <StyledTitle level={2}>Оформление заказа</StyledTitle>
      {orderStatus ? (
        <div className={css.block}>
          <ComponentForm />
          <StyledDiv>
            <Result />
            <Product />
            <StyledButton type="primary" onClick={onSubmit}>
              Оформить заказ
            </StyledButton>
          </StyledDiv>
        </div>
      ) : (
        <StyledAlert
          message={label}
          description={description}
          type="success"
          closable
          onClose={onClose}
          showIcon
        />
      )}
    </div>
  );
};

export default PageBuy;
