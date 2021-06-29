import { Form, Input, message } from "antd";
import React from "react";
import MaskedInput from "antd-mask-input";
import { FormEmail, FormCheckbox, FormlBot, FormMessage } from "../../form";
import { useRootData } from "../../../hooks/use-root-data";
import { StyledForm, StyledButtonOrange } from "../../style";
import css from "./page-centre.module.css";
import "antd/dist/antd.css";

const PageCentreForm = () => {
  const { getDataCenter, botModal, setError, setCenterStatus } = useRootData(
    (store) => ({
      getDataCenter: store.mainStore.getDataCenter,
      botModal: store.mainStore.botModal,
      setError: store.mainStore.setError,
      setCenterStatus: store.mainStore.setCenterStatus,
    })
  );

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataCenter(value);
          setCenterStatus(false);
        })
        .catch((error) => {
          setError(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <StyledForm>
      <Form
        name="nest-messages"
        layout="vertical"
        form={form}
        className={css.form}
      >
        <Form.Item
          name="organization"
          label="Организация"
          rules={[
            {
              required: true,
              message: "Вы не ввели название организации",
            },
          ]}
        >
          <Input placeholder="ФГБОУ ВПО «Вологодский  государственный  университет»" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Контактное лицо"
          rules={[
            {
              required: true,
              message: "Вы не ввели ФИО контактного лица",
            },
          ]}
        >
          <Input placeholder="Иванов Иван Иванович" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[
            {
              required: true,
              message: "Вы не ввели номер телефона",
            },
          ]}
        >
          <MaskedInput
            placeholder="+7 (XXX) XXХ-XX-XX"
            mask="+7 (111) 111-11-11"
            name="card"
          />
        </Form.Item>
        <FormEmail />
        <FormMessage />
        <FormlBot />
        <FormCheckbox />
      </Form>
      <StyledButtonOrange
        type="primary"
        onClick={onSubmit}
        className={css.button}
      >
        Отправить
      </StyledButtonOrange>
    </StyledForm>
  );
};

export default PageCentreForm;
