/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Form,
  message,
  Input,
  Upload,
  Button,
  Typography,
  Timeline,
  notification,
} from "antd";
import { PaperClipOutlined, SmileTwoTone } from "@ant-design/icons";
import {
  FormName,
  FormEmail,
  FormCheckbox,
  FormlBot,
  FormPhone,
} from "../../reusable-components/form";
import { StyledTitle, StyledButtonOrange, StyledText } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-donation.module.css";

const PageDonation = () => {
  const { getDataBuyer, botModal, setErrorDonation } = useRootData((store) => ({
    getDataBuyer: store.mainStore.getDataBuyer,
    botModal: store.mainStore.botModal,
    setErrorDonation: store.mainStore.setErrorDonation,
  }));

  const { Link } = Typography;

  const [form] = Form.useForm();

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

  const openNotification = () => {
    notification.open({
      duration: 10,
      message: "Заявка отправлена!",
      description: "Мы свяжемся с Вами в ближайшее время",
      icon: <SmileTwoTone twoToneColor="#52c41a" />,
    });
  };

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          getDataBuyer(value);
          openNotification();
        })
        .catch((error) => {
          setErrorDonation(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <div className={css.donation}>
      <StyledTitle level={2}>Книга в дар</StyledTitle>
      <div className={css.group}>
        <div className={css.block}>
          <StyledText className={css.text}>
            <span>
              Чтобы передать книгу в дар Информационно-библиотечному комплексу
              ВоГУ, ознакомтесь с Положением{" "}
              <Link href="/#">О комплектовании фондов ИБК ВоГУ.</Link>
            </span>
          </StyledText>
          <StyledText className={css.text}>
            Мы дорожим Вашим временем и не хотим, чтобы предпринятые Вами
            действия оказались напрасными. Поэтому просим заранее, ещё до Вашего
            приезда в библиотеку или до высылки изданий почтой, передать нам
            информацию о будущих дарах. Для этого Вы можете оставить заявку на
            сайте или связаться с нами по телефону или электронной почте. После
            Вашего обращения мы проверим наличие предлагаемых Вами книг и
            документов в наших фондах.
          </StyledText>
          <StyledText className={css.text}>
            Порядок принятия книг в дар ИБК ВоГУ:
          </StyledText>
          <Timeline>
            <StyledText className={css.timeline}>
              <Timeline.Item>
                Сообщите о своём намерении передать книгу в дар: оставьте заявку
                на сайте или свяжитесь с нами по телефону или электронной почте
              </Timeline.Item>
              <Timeline.Item>
                После получения Вашей заявки мы свяжемся с вами. Если вы
                присылаете издания по почте без предварительной договорённости,
                просим обратить внимание на то, что Российская государственная
                библиотека не несёт ответственность за дары, не принятые в
                фонды.
              </Timeline.Item>
              <Timeline.Item>
                После одобрения заявки Вы можете передать книгу в дар ИБК ВоГУ
              </Timeline.Item>
              <Timeline.Item>
                Факт поступления издания в фонды РГБ мы подтвердим официальным
                документом
              </Timeline.Item>
              <Timeline.Item>
                Сведения о принятых дарах заносятся в Книги даров Российской
                государственной библиотеки
              </Timeline.Item>
              <Timeline.Item>
                Сообщения о наиболее ценных экземплярах размещаются на
                официальном сайте библиотеки
              </Timeline.Item>
            </StyledText>
          </Timeline>
        </div>
        <div className={css.request}>
          <div className={css.card}>
            <StyledTitle level={5}>Оставить заявку</StyledTitle>
            <Form
              name="nest-messages"
              layout="vertical"
              form={form}
              className={css.form}
            >
              <FormName />
              <Form.Item
                name="book"
                label="Название книги"
                rules={[
                  {
                    required: true,
                    message: "Вы не ввели название книги",
                  },
                ]}
              >
                <Input placeholder="Интеллектуально-информационные технологии" />
              </Form.Item>
              <FormEmail />
              <FormPhone />
              <FormlBot />
              <Upload className={css.upload} {...uploadingFiles}>
                <Button icon={<PaperClipOutlined />}>Прикрепить файлы</Button>
              </Upload>
              <FormCheckbox />
            </Form>
            <StyledButtonOrange
              type="primary"
              onClick={onSubmit}
              className={css.buttun}
            >
              Отправить
            </StyledButtonOrange>
          </div>
          <StyledText className={css.text}>
            <div className={css.name}>
              <div className={css.contacts}>Контакты:</div>
              <div>Адрес: Вологда, ул. Галкинская, 1, корп. 2</div>
              <div>Телефон: 8 (8172) 72-10-12</div>
              <div>E-mail: library@vogu35.ru, lib@vogu35.ru</div>
            </div>
          </StyledText>
        </div>
      </div>
    </div>
  );
};

export default PageDonation;
