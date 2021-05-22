import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import MaskedInput from "antd-mask-input";
import { useRootData } from "../../../hooks/use-root-data";
import StyledModal from "./styled";
import "antd/dist/antd.css";

const Modal = () => {
  const { showModal, handleOk, handleCancel, setCaptcha } = useRootData(
    (store) => ({
      showModal: store.mainStore.showModal,
      handleOk: store.mainStore.handleOk,
      handleCancel: store.mainStore.handleCancel,
      setCaptcha: store.mainStore.setCaptcha,
    })
  );

  return (
    <StyledModal
      visible={showModal}
      title="Обратная связь"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Отправить
        </Button>,
      ]}
    >
      <Form name="nest-messages">
        <Form.Item
          name={["user", "name"]}
          label="ФИО"
          rules={[
            {
              required: true,
              message: "Вы не ввели ФИО",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
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
          <Input />
        </Form.Item>
        <Form.Item name={["user", "phone"]} label="Номер телефона">
          <MaskedInput
            placeholder="+7 (XXX) XXХ-XX-XX"
            mask="+7 (111) 111-11-11"
            name="card"
          />
        </Form.Item>
        <Form.Item
          name={["user", "note"]}
          label="Сообщение"
          rules={[
            {
              required: true,
              message: "Вы не ввели сообщение",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox onChange={setCaptcha}>
            Даю согласие на обработку персональных данных
          </Checkbox>
        </Form.Item>
      </Form>
    </StyledModal>
  );
};

export default Modal;
