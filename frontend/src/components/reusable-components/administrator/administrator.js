import React, { useState } from "react";
import { Comment, Form, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import css from "./administrator.module.css";

const AddNews = () => {
  const { TextArea } = Input;

  return (
    <>
      <Comment
        content={
          <Form layout="vertical">
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
