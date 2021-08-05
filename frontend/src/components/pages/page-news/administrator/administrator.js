/* eslint-disable no-console */
import React, { useState } from "react";
import { Comment, Form, Button, message, Input, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { useRootData } from "../../../../hooks/use-root-data";
import "moment/locale/ru";
import "antd/dist/antd.css";
import css from "./administrator.module.css";

moment.locale("ru");

const AddNews = () => {
  const { onClickNewsAdd } = useRootData((store) => ({
    onClickNewsAdd: store.mainStore.onClickNewsAdd,
  }));

  const { TextArea } = Input;
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then((value) => {
        onClickNewsAdd(value);
        message.success("Новость опубликована!");
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Comment
        content={
          <Form
            name="nest-messages"
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="title"
              label="Заголовок"
              rules={[
                {
                  required: true,
                  message: "Вы не ввели заголовок новости",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="text"
              label="Текст"
              rules={[
                {
                  required: true,
                  message: "Вы не ввели текст",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="img" label="URL изображения">
              <Input />
            </Form.Item>
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                  message: "Вы не выбрали дату",
                },
              ]}
            >
              <DatePicker
                // defaultValue={moment()}
                format={dateFormatList}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Опубликовать
              </Button>
            </Form.Item>
          </Form>
        }
      />
    </>
  );
};

export const ButtonAdd = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      <div className={css.add}>
        <Button
          type="primary"
          shape="circle"
          className={css.button}
          icon={<PlusOutlined />}
          onClick={() => {
            setBox(!box);
          }}
        />
      </div>
      {box ? <AddNews /> : null}
    </>
  );
};
