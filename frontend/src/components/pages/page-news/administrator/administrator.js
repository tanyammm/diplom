/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Comment, Form, Button, message, Input, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
// import { Editor } from "react-draft-wysiwyg";
import { useRootData } from "../../../../hooks/use-root-data";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "antd/dist/antd.css";
import css from "./administrator.module.css";

const AddNews = () => {
  const { onClickNewsAdd, setLoadingNews, loadingNewsAdd, setLoadingNewsAdd } =
    useRootData((store) => ({
      onClickNewsAdd: store.mainStore.onClickNewsAdd,
      setLoadingNews: store.mainStore.setLoadingNews,
      loadingNewsAdd: store.mainStore.loadingNewsAdd,
      setLoadingNewsAdd: store.mainStore.setLoadingNewsAdd,
    }));

  const { TextArea } = Input;
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then((value) => {
        setLoadingNewsAdd(true);
        setLoadingNews(true);
        onClickNewsAdd(value);
        form.resetFields();
      })
      .catch((error) => {
        message.error(`Произошла ошибка: ${error}`);
      });
  };

  return (
    <>
      <Comment
        content={
          <Form
            fields={[
              {
                name: ["date"],
                value: moment(),
              },
            ]}
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
              <Input placeholder="Заголовок новости" />
            </Form.Item>
            <Form.Item
              name="text"
              label="Новость"
              rules={[
                {
                  required: true,
                  message: "Вы не ввели текст новости",
                },
              ]}
            >
              {/* <Editor
                placeholder="Текст новости"
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                localization={{
                  locale: "ru",
                }}
              /> */}
              <TextArea rows={4} placeholder="Текст новости" />
            </Form.Item>
            <Form.Item name="img" label="URL изображения">
              <Input placeholder="http://library.vogu35.ru/..." />
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
              <DatePicker defaultValue={moment()} format={dateFormatList} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" loading={loadingNewsAdd}>
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
