/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Upload, Button, Form, Input, message, Radio } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import {
  FormName,
  FormEmail,
  FormMessage,
  FormlBot,
  FormCheckbox,
} from "../../reusable-components/form";
import { useRootData } from "../../../hooks/use-root-data";
import StyledModal from "./styled";
import "antd/dist/antd.css";
import css from "./modal.module.css";

const Modal = () => {
  const {
    showModal,
    handleOk,
    handleCancel,
    botModal,
    setErrorModal,
    themeModal,
    setTheme,
    setThemeInput,
  } = useRootData((store) => ({
    showModal: store.mainStore.showModal,
    handleOk: store.mainStore.handleOk,
    handleCancel: store.mainStore.handleCancel,
    botModal: store.mainStore.botModal,
    setErrorModal: store.mainStore.setErrorModal,
    themeModal: store.mainStore.themeModal,
    setTheme: store.mainStore.setTheme,
    setThemeInput: store.mainStore.setThemeInput,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          handleOk(value);
          message.success("Благодарим Вас за обратную связь!");
        })
        .catch((error) => {
          setErrorModal(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  const uploadingFiles = {
    name: "file",
    action: "http://localhost:8000/feedback",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status === "uploading") {
        message.loading(`Файл ${info.file.name} загружается`);
      } else if (info.file.status === "success") {
        message.success(`Файл ${info.file.name} успешно загружен`);
      } else if (info.file.status === "error") {
        message.error(`Не удалось загрузить файл ${info.file.name}`);
      } else if (info.file.status === "removed") {
        message.info(`Файл ${info.file.name} удалён`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },
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
      visible={showModal}
      title="Отправить сообщение"
      onOk={onSubmit}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
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
        <FormName />
        <FormEmail />
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
        <FormMessage />
        <FormlBot />
        <Upload className={css.upload} {...uploadingFiles}>
          <Button icon={<PaperClipOutlined />}>Прикрепить файлы</Button>
        </Upload>
        <FormCheckbox />
      </Form>
    </StyledModal>
  );
};

export default Modal;