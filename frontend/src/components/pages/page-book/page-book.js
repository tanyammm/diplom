import React from "react";
import { Typography, Image, Button, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Document, Page, pdfjs } from "react-pdf";
import ErrorHandling from "./error-handling";
import StyledTitle from "../style/styled-title";
import StyledText from "../style/styled-text";
import StyledSpin from "../style/styled-spin";
import StyledButton from "../style/styled-button";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/обложка.jpg";
import card from "../../../api/books.json";
import pdf from "./infos.pdf";
import "antd/dist/antd.css";
import css from "./page-book.module.css";

const PageBook = () => {
  const { numberPage, setNumberPage, addShopping } = useRootData((store) => ({
    numberPage: store.mainStore.numberPage,
    setNumberPage: store.mainStore.setNumberPage,
    addShopping: store.mainStore.addShopping,
  }));

  const { Text } = Typography;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className={css.book}>
      <StyledTitle level={3} className={css.name}>
        {card[0].name}
      </StyledTitle>
      <Divider className={css.divider} />
      <div className={css.block}>
        <Image
          src={img}
          className={css.img}
          title="Увеличить обложку"
          alt="Обложка книги"
        />
        <div className={css.group}>
          <div className={css.description}>
            <Text className={css.label}>Автор</Text>
            <Divider />
            <Text className={css.data}>{card[0].author}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Год выпуска</Text>
            <Divider />
            <Text className={css.data}>{card[0].year}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Город</Text>
            <Divider />
            <Text className={css.data}>{card[0].city}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Издательство</Text>
            <Divider />
            <Text className={css.data}>{card[0].publisher}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Количество страниц</Text>
            <Divider />
            <Text className={css.data}>{card[0].number} стр.</Text>
          </div>
          <div>
            <Text strong className={css.price}>
              {card[0].price}
            </Text>{" "}
            <Text strong className={css.ruble}>
              ₽
            </Text>
          </div>
          <StyledButton
            type="primary"
            className={css.button}
            onClick={() => {
              addShopping(card[0].price);
            }}
          >
            Купить
          </StyledButton>
        </div>
      </div>
      <StyledTitle level={4} className={css.title}>
        Описание
      </StyledTitle>
      <StyledText className={css.text}>
        В сборнике представлены материалы по информатизации процессов управления
        в различных отраслях промышленного производства, компьютерному
        моделированию в теоретической и экспериментальной физике. Группа
        докладов посвящена автоматизированным системам дистанционного обучения и
        подготовке специалистов, внимание уделено системам компьютерных
        коммуникаций на основе ЛВС, корпоративных сетей, Internet и
        общесистемному программному обеспечению. Материалы конференции
        предназначены для научно-технических работников, преподавателей,
        студентов, аспирантов вузов и других учреждений.
      </StyledText>
      <StyledTitle level={4} className={css.title}>
        Ключевые слова
      </StyledTitle>
      <StyledText className={css.text}>{card[0].keywords}</StyledText>
      <StyledTitle level={4} className={css.title}>
        Предпросмотр
      </StyledTitle>
      <Document
        className={css.document}
        loading={<StyledSpin />}
        file={pdf}
        noData={ErrorHandling}
        error={ErrorHandling}
        onSourceError={ErrorHandling}
      >
        <Button
          shape="circle"
          type="primary"
          disabled={numberPage <= 1}
          onClick={() => {
            setNumberPage(-1);
          }}
        >
          <LeftOutlined />
        </Button>
        <div style={{ minHeight: "85vh" }}>
          <Page
            pageNumber={numberPage}
            error={ErrorHandling}
            noData={ErrorHandling}
            onRenderError={ErrorHandling}
            loading={<StyledSpin />}
          />
        </div>
        <Button
          shape="circle"
          type="primary"
          disabled={numberPage >= 10}
          onClick={() => {
            setNumberPage(1);
          }}
        >
          <RightOutlined />
        </Button>
      </Document>
      <StyledTitle level={4} className={css.title}>
        Рекомендации
      </StyledTitle>
    </div>
  );
};

export default PageBook;
