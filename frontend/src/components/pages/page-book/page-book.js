import React, { createRef } from "react";
import { Typography, Image, Divider, Carousel, List } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Document, Page, pdfjs } from "react-pdf";
import ErrorHandling from "./error-handling";
import {
  StyledTitle,
  StyledText,
  StyledSpin,
  StyledButtonOrange,
  StyledButtonLeaf,
  StyledCard,
  StyledMeta,
} from "../style";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/обложка.jpg";
import card from "../../../api/books.json";
import pdf from "./infos.pdf";
import "antd/dist/antd.css";
import css from "./page-book.module.css";

const carouselOne = card.slice(0, 4);
const carouselTwo = card.slice(4, 8);
const carouselThree = card.slice(8, 12);

const carousel = createRef();
const handleNext = () => carousel.current.next();
const handlePrev = () => carousel.current.prev();

const PageBook = () => {
  const { numberPage, setNumberPage, addShopping } = useRootData((store) => ({
    numberPage: store.mainStore.numberPage,
    setNumberPage: store.mainStore.setNumberPage,
    addShopping: store.mainStore.addShopping,
  }));

  const { Text } = Typography;

  const moveList = (value) => {
    return (
      <List
        grid={{
          gutter: 86,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        className={css.list}
        dataSource={value}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <StyledCard key={item.title} hoverable>
              <Image src={img} alt="Обложка книги" preview={false} />
              <StyledMeta title={item.title} description={item.author} />
              <StyledTitle level={5}>{item.price} ₽</StyledTitle>
              <StyledButtonOrange
                type="primary"
                className={css.buy}
                onClick={() => {
                  addShopping(item.price);
                }}
              >
                Добавить
              </StyledButtonOrange>
            </StyledCard>
          </List.Item>
        )}
      />
    );
  };
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
            <Divider className={css.list} />
            <Text className={css.data}>{card[0].author}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Год выпуска</Text>
            <Divider className={css.list} />
            <Text className={css.data}>{card[0].year}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Город</Text>
            <Divider className={css.list} />
            <Text className={css.data}>{card[0].city}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Издательство</Text>
            <Divider className={css.list} />
            <Text className={css.data}>{card[0].publisher}</Text>
          </div>
          <div className={css.description}>
            <Text className={css.label}>Количество страниц</Text>
            <Divider className={css.list} />
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
          <StyledButtonOrange
            type="primary"
            className={css.button}
            onClick={() => {
              addShopping(card[0].price);
            }}
          >
            Добавить
          </StyledButtonOrange>
        </div>
      </div>
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Описание</StyledTitle>
      </Divider>
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
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Ключевые слова</StyledTitle>
      </Divider>
      <StyledText className={css.text}>{card[0].keywords}</StyledText>
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Ознакомительный фрагмент</StyledTitle>
      </Divider>
      <Document
        className={css.document}
        loading={<StyledSpin />}
        file={pdf}
        noData={ErrorHandling}
        error={ErrorHandling}
        onSourceError={ErrorHandling}
      >
        <StyledButtonLeaf
          shape="circle"
          type="primary"
          size="large"
          disabled={numberPage <= 1}
          onClick={() => {
            setNumberPage(-1);
          }}
        >
          <LeftOutlined />
        </StyledButtonLeaf>
        <Page
          className={css.page}
          pageNumber={numberPage}
          error={ErrorHandling}
          noData={ErrorHandling}
          onRenderError={ErrorHandling}
          loading="Загрузка"
        />
        <StyledButtonLeaf
          shape="circle"
          type="primary"
          size="large"
          disabled={numberPage >= 10}
          onClick={() => {
            setNumberPage(1);
          }}
        >
          <RightOutlined />
        </StyledButtonLeaf>
      </Document>
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Рекомендации</StyledTitle>
      </Divider>
      <StyledButtonLeaf
        shape="circle"
        type="primary"
        size="large"
        onClick={handlePrev}
        className={css.left}
      >
        <LeftOutlined />
      </StyledButtonLeaf>
      <Carousel autoplay ref={carousel} dots={false}>
        <div>{moveList(carouselOne)}</div>
        <div>{moveList(carouselTwo)}</div>
        <div>{moveList(carouselThree)}</div>
      </Carousel>
      <StyledButtonLeaf
        shape="circle"
        type="primary"
        size="large"
        onClick={handleNext}
        className={css.right}
      >
        <RightOutlined />
      </StyledButtonLeaf>
    </div>
  );
};

export default PageBook;
