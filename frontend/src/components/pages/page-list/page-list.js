import React from "react";
import { Form, message, Select, Input } from "antd";
import {
  StyledTitle,
  StyledText,
  StyledButtonOrange,
  StyledForm,
} from "../style";
import { useRootData } from "../../../hooks/use-root-data";
import {
  ModalName,
  ModalEmail,
  ModalCheckbox,
  ModalBot,
  ModalPhone,
} from "../../modal";
import "antd/dist/antd.css";
import css from "./page-list.module.css";

const { Option } = Select;

const PageList = () => {
  const { getDataStudent, botModal, setError } = useRootData((store) => ({
    getDataStudent: store.mainStore.getDataStudent,
    botModal: store.mainStore.botModal,
    setError: store.mainStore.setError,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataStudent(value);
          message.info("Заявка на обходной лист отправлена!");
        })
        .catch((error) => {
          setError(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <StyledForm>
      <StyledTitle level={2}>Обходной лист</StyledTitle>
      <StyledText>
        Уважаемые студенты, чтобы заказать обходной лист для получения диплома,
        заполните форму ниже!
      </StyledText>
      <Form
        name="nest-messages"
        layout="vertical"
        form={form}
        className={css.form}
      >
        <ModalName />
        <ModalPhone />
        <ModalEmail />
        <Form.Item
          name="group"
          label="Группа"
          rules={[
            {
              required: true,
              message: "Вы не ввели группу",
            },
          ]}
        >
          <Input placeholder="5Б09 ВМ-41" />
        </Form.Item>
        <Form.Item
          name="faculty"
          label="Институт"
          rules={[
            {
              required: true,
              message: "Вы не указали институт",
            },
          ]}
        >
          <Select placeholder="Укажите институт">
            <Option value="Институт математики, естественных и компьютерных наук">
              Институт математики, естественных и компьютерных наук
            </Option>
            <Option value="Институт машиностроения, энергетики и транспорта">
              Институт машиностроения, энергетики и транспорта
            </Option>
            <Option value="Инженерно-строительный институт">
              Инженерно-строительный институт
            </Option>
            <Option value="Институт управления, экономики и юриспруденции">
              Институт управления, экономики и юриспруденции
            </Option>
            <Option value="Институт педагогики, психологии и физического воспитания">
              Институт педагогики, психологии и физического воспитания
            </Option>
            <Option value="Институт социальных и гуманитарных наук">
              Институт социальных и гуманитарных наук
            </Option>
            <Option value="Институт культуры и туризма">
              Институт культуры и туризма
            </Option>
            <Option value="Университетский колледж">
              Университетский колледж
            </Option>
            <Option value="МРЦПК">МРЦПК</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="educational"
          label="Форма обучения"
          rules={[
            {
              required: true,
              message: "Вы не указали форму обучения",
            },
          ]}
        >
          <Select placeholder="Укажите форму обучения">
            <Option value="очная">очная</Option>
            <Option value="заочная">заочная</Option>
            <Option value="очно-заочная">очно-заочная</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="funding"
          label="Источник финансирования"
          rules={[
            {
              required: true,
              message: "Вы не указали источник финансирования",
            },
          ]}
        >
          <Select placeholder="Укажите источник финансирования">
            <Option value="бюджет">бюджет</Option>
            <Option value="договор">договор</Option>
          </Select>
        </Form.Item>
        <ModalBot />
        <ModalCheckbox />
      </Form>
      <StyledButtonOrange
        type="primary"
        onClick={onSubmit}
        className={css.button}
      >
        Отправить
      </StyledButtonOrange>
    </StyledForm>
  );
};

export default PageList;
