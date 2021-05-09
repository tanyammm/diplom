/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { createRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
import img4 from "../../../img/4.jpg";
import img5 from "../../../img/5.jpg";
import img6 from "../../../img/6.jpg";
import img7 from "../../../img/7.jpg";
import img8 from "../../../img/8.jpg";
import "antd/dist/antd.css";
import css from "./imgs.module.css";

const carousel = createRef();
const handleNext = () => carousel.current.next();
const handlePrev = () => carousel.current.prev();

const Imgs = (
  <div>
    <Carousel className={css.carousel} autoplay ref={carousel}>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img1} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img2} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img3} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img4} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img5} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img6} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img7} alt="фотография с книгами" />
        </h3>
      </div>
      <div>
        <h3 className={css.content}>
          <img className={css.img} src={img8} alt="фотография с книгами" />
        </h3>
      </div>
    </Carousel>
    <div className={css.ant_carousel_left} onClick={handlePrev}>
      <LeftOutlined />
    </div>
    <div className={css.ant_carousel_right} onClick={handleNext}>
      <RightOutlined />
    </div>
  </div>
);

export default Imgs;
