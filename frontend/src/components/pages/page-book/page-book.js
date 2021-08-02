/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { createRef, useEffect, useState } from "react";
import { Typography, Image, Divider, Carousel, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import ErrorHandling from "./error-handling";
import {
  StyledTitle,
  StyledText,
  StyledButtonOrange,
  StyledButtonLeaf,
  StyledButtonShopping,
} from "../../style";
import PageError from "../page-error";
import { StyledSpin } from "../../reusable-components";
import Books from "../../reusable-components/books";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/обложка.jpg";
import card from "../../../api/books.json";
import pdf from "./infos.pdf";
import "antd/dist/antd.css";
import css from "./page-book.module.css";

const PageBook = (value) => {
  const { numberPage, setNumberPage, addShopping, arrayIndex, randomBook } =
    useRootData((store) => ({
      numberPage: store.mainStore.numberPage,
      setNumberPage: store.mainStore.setNumberPage,
      addShopping: store.mainStore.addShopping,
      arrayIndex: store.mainStore.arrayIndex,
      randomBook: store.mainStore.randomBook,
    }));

  const { Text } = Typography;

  const carouselOne = card.slice(randomBook, randomBook + 4);
  const carouselTwo = card.slice(randomBook + 8, randomBook + 12);
  const carouselThree = card.slice(randomBook + 4, randomBook + 8);

  const carousel = createRef();
  const handleNext = () => carousel.current.next();
  const handlePrev = () => carousel.current.prev();

  const [add, setAdd] = useState();
  const onClick = (item) => {
    addShopping(item);
    setAdd(item);
  };

  useEffect(() => {
    setAdd();
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const file = pdfjs.getDocument(pdf);

  const [pages, setPages] = useState();
  (async () => {
    await file.promise.then((book) => {
      const numberPages = Math.round((book.numPages * 10) / 100);
      if (numberPages < 10) {
        setPages(numberPages);
      } else {
        setPages(10);
      }
    });
  })();

  const array = [];
  for (let i = 0; i < card.length; i += 1) {
    array.push(card[i].id);
  }
  const { id } = value.match.params;

  let param;

  if (Number.isNaN(id)) {
    param = id;
  } else {
    param = JSON.parse(id);
  }

  return (
    <div className={css.book}>
      {array.includes(param) ? (
        <>
          <StyledTitle level={3} className={css.name}>
            {card[id].name}
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
                <Text className={css.data}>{card[id].author}</Text>
              </div>
              <div className={css.description}>
                <Text className={css.label}>Год выпуска</Text>
                <Divider className={css.list} />
                <Text className={css.data}>{card[id].year}</Text>
              </div>
              <div className={css.description}>
                <Text className={css.label}>Город</Text>
                <Divider className={css.list} />
                <Text className={css.data}>{card[id].city}</Text>
              </div>
              <div className={css.description}>
                <Text className={css.label}>Издательство</Text>
                <Divider className={css.list} />
                <Text className={css.data}>{card[id].publisher}</Text>
              </div>
              <div className={css.description}>
                <Text className={css.label}>Количество страниц</Text>
                <Divider className={css.list} />
                <Text className={css.data}>{card[id].number} стр.</Text>
              </div>
              <div>
                <Text strong className={css.price}>
                  {card[id].price}
                </Text>{" "}
                <Text strong className={css.ruble}>
                  ₽
                </Text>
              </div>
              {arrayIndex.includes(card[id].id) ? (
                <Link to="/library/shopping">
                  <StyledButtonShopping type="primary" className={css.button}>
                    В корзине
                  </StyledButtonShopping>
                </Link>
              ) : (
                <StyledButtonOrange
                  type="primary"
                  className={css.button}
                  onClick={() => {
                    onClick(card[id]);
                  }}
                >
                  Добавить
                </StyledButtonOrange>
              )}
            </div>
          </div>
          <Divider orientation="left" className={css.title}>
            <StyledTitle level={4}>Ключевые слова</StyledTitle>
          </Divider>
          <StyledText className={css.text}>{card[id].keywords}</StyledText>
          <Divider orientation="left" className={css.title}>
            <StyledTitle level={4}>Ознакомительный фрагмент</StyledTitle>
          </Divider>
          <Row gutter={16} className={css.row}>
            <Document
              loading={<StyledSpin />}
              file={pdf}
              noData={ErrorHandling}
              error={ErrorHandling}
              onSourceError={ErrorHandling}
              className={css.document}
            >
              <Col span={2} className={css.left}>
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
              </Col>
              <Col span={20}>
                <Page
                  className={css.page}
                  pageNumber={numberPage}
                  error={ErrorHandling}
                  noData={ErrorHandling}
                  onRenderError={ErrorHandling}
                  loading={<StyledSpin />}
                />
              </Col>
              <Col span={2}>
                <StyledButtonLeaf
                  shape="circle"
                  type="primary"
                  size="large"
                  disabled={numberPage >= pages}
                  onClick={() => {
                    setNumberPage(1);
                  }}
                >
                  <RightOutlined />
                </StyledButtonLeaf>
              </Col>
            </Document>
          </Row>
          <Divider orientation="left" className={css.title}>
            <StyledTitle level={4}>Рекомендации</StyledTitle>
          </Divider>
          <Row gutter={16} className={css.recommendations}>
            <Col span={2} className={css.left}>
              <StyledButtonLeaf
                shape="circle"
                type="primary"
                size="large"
                onClick={handlePrev}
              >
                <LeftOutlined />
              </StyledButtonLeaf>
            </Col>
            <Col span={20}>
              <Carousel autoplay ref={carousel} dots={false}>
                <div>{Books(carouselOne)}</div>
                <div>{Books(carouselTwo)}</div>
                <div>{Books(carouselThree)}</div>
              </Carousel>
            </Col>
            <Col span={2}>
              <StyledButtonLeaf
                shape="circle"
                type="primary"
                size="large"
                onClick={handleNext}
              >
                <RightOutlined />
              </StyledButtonLeaf>
            </Col>
          </Row>
        </>
      ) : (
        <PageError />
      )}
    </div>
  );
};

export default PageBook;
