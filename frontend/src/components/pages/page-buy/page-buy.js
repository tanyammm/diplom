/* eslint-disable promise/catch-or-return */
import React from "react";
import { Typography, Form, Input, Alert } from "antd";
import MaskedInput from "antd-mask-input";
import StyledButton from "../style/styled-button";
import StyledTitle from "../style/styled-title";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-buy.module.css";

const { Text } = Typography;

const PageBuy = () => {
  const {
    quantityProducts,
    amountBuy,
    getDataBuyer,
    orderStatus,
    setOrderStatus,
  } = useRootData((store) => ({
    quantityProducts: store.mainStore.quantityProducts,
    amountBuy: store.mainStore.amountBuy,
    getDataBuyer: store.mainStore.getDataBuyer,
    orderStatus: store.mainStore.orderStatus,
    setOrderStatus: store.mainStore.setOrderStatus,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    form.validateFields().then((value) => {
      form.resetFields();
      getDataBuyer(value);
      setOrderStatus(false);
    });
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
        <Form.Item
          name="name"
          label="Имя"
          rules={[
            {
              required: true,
              message: "Вы не ввели имя",
            },
          ]}
        >
          <Input placeholder="Иван" />
        </Form.Item>
        <Form.Item
          name="surname"
          label="Фамилия"
          rules={[
            {
              required: true,
              message: "Вы не ввели фамилию",
            },
          ]}
        >
          <Input placeholder="Иванов" />
        </Form.Item>
        <Form.Item name="phone" label="Телефон">
          <MaskedInput
            placeholder="+7 (XXX) XXХ-XX-XX"
            mask="+7 (111) 111-11-11"
            name="card"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "Email введён неверно",
            },
            {
              required: true,
              message: "Вы не ввели email",
            },
          ]}
        >
          <Input placeholder="ivanov@vogu35.ru" />
        </Form.Item>
      </Form>
    );
  };

  return (
    <div className={css.buy}>
      <StyledTitle level={2}>Оформление заказа</StyledTitle>
      {orderStatus ? (
        <div className={css.block}>
          <ComponentForm />
          <div className={css.card}>
            <Text className={css.result}>Итог {quantityProducts} ₽</Text>
            <Text className={css.product}>Товаров {amountBuy} шт.</Text>
            <StyledButton
              type="primary"
              className={css.buttun}
              onClick={onSubmit}
            >
              Оформить заказ
            </StyledButton>
          </div>
        </div>
      ) : (
        <Alert
          message="Поздравляем! Вы успешно оформили заказ №345-9879908"
          type="warning"
          closable
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default PageBuy;
