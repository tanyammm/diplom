/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
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
  const carouselOne = card.slice(0, 4);
  const carouselTwo = card.slice(4, 8);
  const carouselThree = card.slice(8, 12);

  const carousel = createRef();
  const handleNext = () => carousel.current.next();
  const handlePrev = () => carousel.current.prev();

  const { Text } = Typography;

  const { numberPage, setNumberPage, addShopping, arrayIndex } = useRootData(
    (store) => ({
      numberPage: store.mainStore.numberPage,
      setNumberPage: store.mainStore.setNumberPage,
      addShopping: store.mainStore.addShopping,
      arrayIndex: store.mainStore.arrayIndex,
    })
  );

  const [add, setAdd] = useState();
  const onClick = (item) => {
    addShopping(item);
    setAdd(item);
  };

  useEffect(() => {
    setAdd();
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const array = [];
  for (let i = 0; i < card.length; i++) {
    array.push(card[i].id);
  }
  const { id } = value.match.params;

  let param;

  if (isNaN(id)) {
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
            <StyledTitle level={4}>Описание</StyledTitle>
          </Divider>
          <StyledText className={css.text}>{card[id].description}</StyledText>
          <Divider orientation="left" className={css.title}>
            <StyledTitle level={4}>Ключевые слова</StyledTitle>
          </Divider>
          <StyledText className={css.text}>{card[id].keywords}</StyledText>
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
              loading={<StyledSpin />}
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
          <Row gutter={16} className={css.recommendations}>
            <Col span={1}>
              <StyledButtonLeaf
                shape="circle"
                type="primary"
                size="large"
                onClick={handlePrev}
              >
                <LeftOutlined />
              </StyledButtonLeaf>
            </Col>
            <Col span={22}>
              <Carousel autoplay ref={carousel} dots={false}>
                <div>{Books(carouselOne)}</div>
                <div>{Books(carouselTwo)}</div>
                <div>{Books(carouselThree)}</div>
              </Carousel>
            </Col>
            <Col span={1}>
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
