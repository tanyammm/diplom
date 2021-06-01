/* eslint-disable promise/catch-or-return */
import React from "react";
import { Button, Form, Input, Checkbox, message } from "antd";
import MaskedInput from "antd-mask-input";
import { useRootData } from "../../../hooks/use-root-data";
import StyledModal from "./styled";
import css from "./modal.module.css";
import "antd/dist/antd.css";

const Modal = () => {
  const { showModal, handleOk, handleCancel, botModal, searchBotModal } =
    useRootData((store) => ({
      showModal: store.mainStore.showModal,
      handleOk: store.mainStore.handleOk,
      handleCancel: store.mainStore.handleCancel,
      botModal: store.mainStore.botModal,
      searchBotModal: store.mainStore.searchBotModal,
    }));

  const [form] = Form.useForm();
  const onSubmit = () => {
    if (botModal === "") {
      form.validateFields().then((value) => {
        form.resetFields();
        handleOk(value);
        message.success("Сообщение отправлено");
      });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <StyledModal
      data-testid="modal"
      visible={showModal}
      title="Обратная связь"
      onOk={onSubmit}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={onSubmit}>
          Отправить
        </Button>,
      ]}
    >
      <Form name="nest-messages" form={form}>
        <Form.Item
          name="name"
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
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Номер телефона">
          <MaskedInput
            placeholder="+7 (XXX) XXХ-XX-XX"
            mask="+7 (111) 111-11-11"
            name="card"
          />
        </Form.Item>
        <Form.Item
          name="message"
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
        <Form.Item className={css.none} label="Оставьте это поле пустым" />
        <Input
          value={botModal}
          onChange={(e) => searchBotModal(e.target.value)}
          className={css.none}
        />
        <div className={css.checkbox}>
          <Form.Item
            name="remember"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Согласитесь с политикой обработки персональных данных"
                        )
                      ),
              },
            ]}
          >
            <Checkbox>
              Даю согласие на{" "}
              <a href="https://vogu35.ru/politiki/obrabotka-personalnyh-dannyh">
                обработку своих персональных данных
              </a>
            </Checkbox>
          </Form.Item>
        </div>
      </Form>
    </StyledModal>
  );
};

export default Modal;
