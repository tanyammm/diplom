/* eslint-disable no-console */
import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { StyledTitle } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import Books from "../../reusable-components/books";
import "antd/dist/antd.css";
import css from "./page-search.module.css";

const PageSearch = () => {
  const { elements, searchBookSelect, titlePageSearch } = useRootData(
    (store) => ({
      elements: store.mainStore.elements,
      searchBookSelect: store.mainStore.searchBookSelect,
      titlePageSearch: store.mainStore.titlePageSearch,
    })
  );

  const { Option } = Select;

  const [visibility, setVisibility] = useState(false);
  const [title, setTitle] = useState("Открыть");
  const [icon, setIcon] = useState(<CaretDownOutlined />);

  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then((value) => {
        form.resetFields();
        searchBookSelect(value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const FormSearch = () => {
    return (
      <div className={css.form}>
        <Form form={form} onFinish={onFinish}>
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
            <Input
              placeholder="Введите текст для поиска"
              className={css.input}
            />
          </Form.Item>
          <Form.Item
            name="select"
            label="Поле"
            rules={[
              {
                required: true,
                message: "Вы не выбрали поле для поиска",
              },
            ]}
          >
            <Select placeholder="Выберите поле для поиска">
              <Option value="Название">Название</Option>
              <Option value="Автор">Автор</Option>
              <Option value="Год">Год</Option>
              <Option value="Ключевые слова">Ключевые слова</Option>
            </Select>
          </Form.Item>
          <div className={css.center}>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              icon={<SearchOutlined />}
            >
              Найти книгу
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  const onClick = () => {
    setVisibility(!visibility);
    if (title === "Открыть") {
      setTitle("Скрыть");
      setIcon(<CaretUpOutlined />);
    } else {
      setTitle("Открыть");
      setIcon(<CaretDownOutlined />);
    }
  };

  return (
    <div className={css.search}>
      <StyledTitle level={2}>{titlePageSearch}</StyledTitle>
      <div className={css.title}>
        <Button
          className={css.button}
          type="link"
          onClick={onClick}
          icon={icon}
        >
          {title} расширенный поиск
        </Button>
      </div>
      {visibility ? <FormSearch /> : null}
      {Books(elements)}
    </div>
  );
};

export default PageSearch;
