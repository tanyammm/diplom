import React from "react";
import { Typography, Form, message } from "antd";
import { ModalName, ModalEmail, ModalCheckbox, ModalBot } from "../../modal";
import StyledTitle from "../style/styled-title";
import StyledButton from "../style/styled-button";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-donation.module.css";

const PageDonation = () => {
  const { getDataBuyer, botModal, setError } = useRootData((store) => ({
    getDataBuyer: store.mainStore.getDataBuyer,
    botModal: store.mainStore.botModal,
    setError: store.mainStore.setError,
  }));

  const { Text } = Typography;

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataBuyer(value);
        })
        .catch((error) => {
          setError(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <div className={css.donation}>
      <StyledTitle level={2}>Книга в дар</StyledTitle>
      <div className={css.group}>
        <div className={css.block}>
          <Text strong className={css.text}>
            Чтобы передать книгу в дар Информационно-библиотечному комплексу
            ВоГУ, ознакомтесь с Положением{" "}
            <a href="http://localhost:3000/library/donation">
              О комплектовании фондов ИБК ВоГУ.
            </a>
          </Text>
          <Text strong className={css.text}>
            Просим заранее, ещё до вашего приезда в библиотеку или до высылки
            изданий почтой, передать нам по телефону или по электронной почте
            информацию о будущих дарах. Мы дорожим вашим временем и не хотим,
            чтобы предпринятые вами действия оказались напрасными. После вашего
            обращения мы проверим наличие предлагаемых вами книг и документов в
            наших фондах. Если вы присылаете издания по почте без
            предварительной договорённости, просим обратить внимание на то, что
            Российская государственная библиотека не несёт ответственность за
            дары, не принятые в фонды. Факт поступления издания в фонды РГБ мы
            подтвердим официальным документом. Сведения о принятых дарах
            заносятся в Книги даров Российской государственной библиотеки.
            Сообщения о наиболее ценных экземплярах размещаются на официальном
            сайте библиотеки.
          </Text>
        </div>
        <div className={css.block}>
          <div className={css.card}>
            <StyledTitle level={5}>Оставить заявку</StyledTitle>
            <Form
              name="nest-messages"
              layout="vertical"
              form={form}
              className={css.form}
            >
              <ModalName />
              <ModalEmail />
              <ModalBot />
              <ModalCheckbox />
            </Form>
            <StyledButton
              type="primary"
              onClick={onSubmit}
              className={css.buttun}
            >
              Оформить заказ
            </StyledButton>
          </div>
          <Text strong className={css.text}>
            <div>
              Контакты:
              <div>E-mail: library@vogu35.ru, lib@vogu35.ru</div>
              <div>Телефон: 8 (8172) 72-10-12</div>
              <div>Адрес: Вологда, ул. Галкинская, 1, корп. 2</div>
            </div>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PageDonation;
