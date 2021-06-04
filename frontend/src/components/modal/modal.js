import React from "react";
import { Form, Input, Checkbox, Typography } from "antd";
import MaskedInput from "antd-mask-input";
import "antd/dist/antd.css";
import { useRootData } from "../../hooks/use-root-data";
import css from "./modal.module.css";

const { Text } = Typography;

export const ModalName = () => {
  return (
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
      <Input placeholder="Иванов Иван Иванович" />
    </Form.Item>
  );
};

export const ModalEmail = () => {
  return (
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
  );
};

export const ModalPhone = () => {
  return (
    <Form.Item name="phone" label="Телефон">
      <MaskedInput
        placeholder="+7 (XXX) XXХ-XX-XX"
        mask="+7 (111) 111-11-11"
        name="card"
      />
    </Form.Item>
  );
};

export const ModalCheckbox = () => {
  return (
    <div className={css.checkbox}>
      <Form.Item
        name="checkbox"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "Вы не согласились с политикой обработки персональных данных"
                    )
                  ),
          },
        ]}
      >
        <Checkbox className={css.checkbox}>
          Даю согласие на{" "}
          <a href="https://vogu35.ru/politiki/obrabotka-personalnyh-dannyh">
            обработку своих персональных данных
          </a>
        </Checkbox>
      </Form.Item>
    </div>
  );
};

export const ModalBot = () => {
  const { botModal, searchBotModal } = useRootData((store) => ({
    botModal: store.mainStore.botModal,
    searchBotModal: store.mainStore.searchBotModal,
  }));
  return (
    <>
      <Text className={css.none}>Оставьте это поле пустым</Text>
      <Input
        name="surname"
        value={botModal}
        onChange={(e) => searchBotModal(e.target.value)}
        className={css.none}
      />
    </>
  );
};
