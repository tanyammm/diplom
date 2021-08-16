/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { createRef, useEffect, useState } from "react";
import { Typography, Image, Divider, Carousel, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import ReactHtmlParser from "react-html-parser";
import ErrorHandlingFragment from "./error-handling";
import {
  StyledTitle,
  StyledText,
  StyledButtonOrange,
  StyledButtonLeaf,
  StyledButtonShopping,
} from "../../style";
import PageError from "../page-error";
import { StyledSpin, ErrorHandling } from "../../reusable-components";
import Books from "../../reusable-components/books";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/cover.png";
import pdf from "./infos.pdf";
import "antd/dist/antd.css";
import css from "./page-book.module.css";

const PageBook = (value) => {
  const {
    numberPage,
    setNumberPage,
    addShopping,
    arrayIndex,
    randomBook,
    books,
    loadingBooksId,
    getBooksId,
    setLoadingBooksId,
    booksId,
    getErrorBooksId,
    setLoadingShopping,
    error,
  } = useRootData((store) => ({
    numberPage: store.mainStore.numberPage,
    setNumberPage: store.mainStore.setNumberPage,
    addShopping: store.mainStore.addShopping,
    arrayIndex: store.mainStore.arrayIndex,
    randomBook: store.mainStore.randomBook,
    books: store.mainStore.books,
    loadingBooksId: store.mainStore.loadingBooksId,
    getBooksId: store.mainStore.getBooksId,
    setLoadingBooksId: store.mainStore.setLoadingBooksId,
    booksId: store.mainStore.booksId,
    getErrorBooksId: store.mainStore.getErrorBooksId,
    setLoadingShopping: store.mainStore.setLoadingShopping,
    error: store.mainStore.error,
  }));

  const { Text } = Typography;

  const carouselOne = books.slice(randomBook, randomBook + 4);
  const carouselTwo = books.slice(randomBook + 8, randomBook + 12);
  const carouselThree = books.slice(randomBook + 4, randomBook + 8);

  const carousel = createRef();
  const handleNext = () => carousel.current.next();
  const handlePrev = () => carousel.current.prev();

  const [array, setArray] = useState();

  const onClick = (item) => {
    setLoadingShopping(true);
    addShopping(item);
    setArray(item._id);
  };

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

  const { id } = value.match.params;

  useEffect(() => {
    setLoadingBooksId(true);
    getBooksId(id);
  }, [id]);

  const Book = () => {
    return (
      <>
        <StyledTitle level={3} className={css.name}>
          {ReactHtmlParser(booksId.Custom1)}
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
              <Text className={css.label}>Автор (ы)</Text>
              <Divider className={css.list} />
              <Text className={css.data}>{booksId.Author}</Text>
            </div>
            <div className={css.description}>
              <Text className={css.label}>Год выпуска</Text>
              <Divider className={css.list} />
              <Text className={css.data}>{booksId.Year}</Text>
            </div>
            <div className={css.description}>
              <Text className={css.label}>Хранение</Text>
              <Divider className={css.list} />
              <Text className={css.data}>{booksId.School}</Text>
            </div>
            <div className={css.description}>
              <Text className={css.label}>Количество экземпляров</Text>
              <Divider className={css.list} />
              <Text className={css.data}>{booksId.Series}</Text>
            </div>
            <div className={css.description}>
              <Text className={css.label}>Код ББК</Text>
              <Divider className={css.list} />
              <Text className={css.data}>{booksId.Volume}</Text>
            </div>
            <div>
              <Text strong className={css.price}>
                {booksId.price}
              </Text>{" "}
              <Text strong className={css.ruble}>
                ₽
              </Text>
            </div>
            {arrayIndex.includes(booksId._id) ? (
              <Link to="/diplom/shopping">
                <StyledButtonShopping type="primary" className={css.button}>
                  В корзине
                </StyledButtonShopping>
              </Link>
            ) : (
              <StyledButtonOrange
                type="primary"
                className={css.button}
                onClick={() => {
                  onClick(booksId);
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
        <StyledText className={css.text}>{booksId.Custom2}</StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>Ознакомительный фрагмент</StyledTitle>
        </Divider>
        <Row gutter={16} className={css.row}>
          <Document
            loading={<StyledSpin />}
            file={pdf}
            noData={ErrorHandlingFragment}
            error={ErrorHandlingFragment}
            onSourceError={ErrorHandlingFragment}
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
                error={ErrorHandlingFragment}
                noData={ErrorHandlingFragment}
                onRenderError={ErrorHandlingFragment}
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
    );
  };

  return (
    <>
      {error ? (
        <ErrorHandling />
      ) : (
        <div className={css.book}>
          {getErrorBooksId ? (
            <PageError />
          ) : (
            <>
              {loadingBooksId ? (
                <div className={css.spin}>
                  <StyledSpin />
                </div>
              ) : (
                <Book />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PageBook;
