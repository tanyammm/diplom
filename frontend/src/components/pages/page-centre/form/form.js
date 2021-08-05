import { Form, Input, message } from "antd";
import React from "react";
import MaskedInput from "antd-mask-input";
import {
  FormEmail,
  FormCheckbox,
  FormlBot,
  FormMessage,
} from "../../../reusable-components/form";
import { useRootData } from "../../../../hooks/use-root-data";
import { StyledForm, StyledButtonOrange } from "../../../style";
import "antd/dist/antd.css";
import css from "./form.module.css";

const CentreForm = () => {
  const { getDataCenter, botModal, setErrorCentre, setCenterStatus } =
    useRootData((store) => ({
      getDataCenter: store.mainStore.getDataCenter,
      botModal: store.mainStore.botModal,
      setErrorCentre: store.mainStore.setErrorCentre,
      setCenterStatus: store.mainStore.setCenterStatus,
    }));

  const [form] = Form.useForm();

  const onFinish = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataCenter(value);
          setCenterStatus(false);
        })
        .catch((error) => {
          setErrorCentre(error);
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
        onFinish={onFinish}
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
        <div className={css.center}>
          <StyledButtonOrange
            htmlType="submit"
            type="primary"
            className={css.button}
          >
            Отправить
          </StyledButtonOrange>
        </div>
      </Form>
    </StyledForm>
  );
};

export default CentreForm;
