import React from "react";
import { Button, Modal, Form, Input } from "antd";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./modal.module.css";

const ModalWindow = () => {
  const { showModal, handleOk, handleCancel } = useRootData((store) => ({
    showModal: store.mainStore.showModal,
    handleOk: store.mainStore.handleOk,
    handleCancel: store.mainStore.handleCancel,
  }));

  return (
    <Modal
      className={css}
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
              message: "Пожалуйста, введите своё ФИО",
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
              email: `Неправильно введён адрес электронной почты. Проверьте введённый email`,
              required: true,
              message: "Пожалуйста, введите свой email",
            },
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
              message: "Пожалуйста, введите своё сообщение",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalWindow;
