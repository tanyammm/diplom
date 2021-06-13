import React from "react";
import { Form, message, Input, Upload, Button } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import {
  ModalName,
  ModalEmail,
  ModalCheckbox,
  ModalBot,
  ModalPhone,
} from "../../modal";
import StyledTitle from "../style/styled-title";
import StyledButton from "../style/styled-button";
import StyledText from "../style/styled-text";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-donation.module.css";

const PageDonation = () => {
  const { getDataBuyer, botModal, setError } = useRootData((store) => ({
    getDataBuyer: store.mainStore.getDataBuyer,
    botModal: store.mainStore.botModal,
    setError: store.mainStore.setError,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataBuyer(value);
          message.info("Заявка отправлена!");
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
          <StyledText className={css.text}>
            Чтобы передать книгу в дар Информационно-библиотечному комплексу
            ВоГУ, ознакомтесь с Положением О комплектовании фондов ИБК ВоГУ.
          </StyledText>
          <StyledText className={css.text}>
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
          </StyledText>
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
              <Form.Item
                name="book"
                label="Название книги"
                rules={[
                  {
                    required: true,
                    message: "Вы не ввели название книги",
                  },
                ]}
              >
                <Input placeholder="Интеллектуально-информационные технологии" />
              </Form.Item>
              <ModalEmail />
              <ModalPhone />
              <ModalBot />
              <Upload className={css.upload}>
                <Button icon={<PaperClipOutlined />}>Прикрепить файлы</Button>
              </Upload>
              <ModalCheckbox />
            </Form>
            <StyledButton
              type="primary"
              onClick={onSubmit}
              className={css.buttun}
            >
              Отправить
            </StyledButton>
          </div>
          <StyledText className={css.text}>
            <div className={css.name}>
              Контакты:
              <div>E-mail: library@vogu35.ru, lib@vogu35.ru</div>
              <div>Телефон: 8 (8172) 72-10-12</div>
              <div>Адрес: Вологда, ул. Галкинская, 1, корп. 2</div>
            </div>
          </StyledText>
        </div>
      </div>
    </div>
  );
};

export default PageDonation;
