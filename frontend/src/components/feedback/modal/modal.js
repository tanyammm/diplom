import React from "react";
import { Button, Form, Input } from "antd";
import { useRootData } from "../../../hooks/use-root-data";
import StyledModal from "./styled";
import "antd/dist/antd.css";

const Modal = () => {
  const { showModal, handleOk, handleCancel } = useRootData((store) => ({
    showModal: store.mainStore.showModal,
    handleOk: store.mainStore.handleOk,
    handleCancel: store.mainStore.handleCancel,
  }));

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
        <Form.Item
          name={["user", "phone"]}
          label="Номер телефона"
          rules={[
            () => ({
              validator(_, value) {
                if (value.length <= 11) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Номер не может быть больше 11 символов")
                );
              },
            }),
          ]}
        >
          <Input />
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
      </Form>
    </StyledModal>
  );
};

export default Modal;
