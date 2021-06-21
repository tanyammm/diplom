import React from "react";
import { Link } from "react-router-dom";
import { Typography, Form, message } from "antd";
import {
  ModalName,
  ModalEmail,
  ModalPhone,
  ModalCheckbox,
  ModalBot,
} from "../../modal";
import { StyledTitle, StyledButtonOrange, StyledAlert } from "../style";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-buy.module.css";

const { Text } = Typography;

const PageBuy = () => {
  const {
    quantityProducts,
    numberPurchases,
    getDataBuyer,
    botModal,
    orderStatus,
    setOrderStatus,
    setError,
    numberOrder,
    clearCount,
  } = useRootData((store) => ({
    quantityProducts: store.mainStore.quantityProducts,
    numberPurchases: store.mainStore.numberPurchases,
    getDataBuyer: store.mainStore.getDataBuyer,
    botModal: store.mainStore.botModal,
    orderStatus: store.mainStore.orderStatus,
    setOrderStatus: store.mainStore.setOrderStatus,
    setError: store.mainStore.setError,
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
          setError(error);
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
        <ModalName />
        <ModalPhone />
        <ModalEmail />
        <ModalBot />
        <ModalCheckbox />
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
          <div className={css.card}>
            <Text className={css.result}>Итог {quantityProducts} ₽</Text>
            <Text className={css.product}>Товаров {numberPurchases} шт.</Text>
            <StyledButtonOrange
              type="primary"
              className={css.buttun}
              onClick={onSubmit}
            >
              Оформить заказ
            </StyledButtonOrange>
          </div>
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
