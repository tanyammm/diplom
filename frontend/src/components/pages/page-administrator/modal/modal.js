/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { useRootData } from "../../../../hooks/use-root-data";
import StyledModal from "./styled";
import "antd/dist/antd.css";
import css from "./modal.module.css";

const Modal = () => {
  const {
    showModalUser,
    handleOk,
    handleCancelUser,
    setErrorModal,
    themeModal,
    setTheme,
    setThemeInput,
  } = useRootData((store) => ({
    showModalUser: store.mainStore.showModalUser,
    handleOk: store.mainStore.handleOk,
    handleCancelUser: store.mainStore.handleCancelUser,
    setErrorModal: store.mainStore.setErrorModal,
    themeModal: store.mainStore.themeModal,
    setTheme: store.mainStore.setTheme,
    setThemeInput: store.mainStore.setThemeInput,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    form
      .validateFields()
      .then((value) => {
        form.resetFields();
        handleOk(value);
      })
      .catch((error) => {
        setErrorModal(error);
      });
  };

  const onChangeRadio = (e) => {
    setTheme(e.target.value);
  };

  const onChangeInput = (e) => {
    setThemeInput(e.target.value);
  };

  return (
    <StyledModal
      data-testid="modal"
      visible={showModalUser}
      title="Отправить сообщение"
      onOk={onSubmit}
      onCancel={handleCancelUser}
      footer={[
        <Button key="back" onClick={handleCancelUser}>
          Отмена
        </Button>,
        <Button
          key="submit"
          htmlType="submit"
          type="primary"
          onClick={onSubmit}
        >
          Отправить
        </Button>,
      ]}
    >
      <Form name="nest-messages" form={form} layout="vertical">
        <Form.Item
          name="theme"
          label="Тема сообщения"
          rules={[
            {
              required: true,
              message: "Вы не выбрали тему сообщения",
            },
          ]}
        >
          <Radio.Group
            className={css.radio}
            value={themeModal}
            onChange={onChangeRadio}
          >
            <Radio value="Вопрос">Вопрос</Radio>
            <Radio value="Предложение">Предложение</Radio>
            <Radio value="Опечатка или проблема на сайте">
              Опечатка или проблема на сайте
            </Radio>
            <Radio value="Другое">
              Другое
              {themeModal === "Другое" ? (
                <Input
                  bordered={false}
                  style={{ marginLeft: 10 }}
                  onChange={onChangeInput}
                  className={css.input}
                />
              ) : null}
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </StyledModal>
  );
};

export default Modal;
