import React from "react";
import StyledCarousel from "./styled";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import "antd/dist/antd.css";
import css from "./carousel.module.css";

const Carousel = (
  <>
    <StyledCarousel className={css.carousel} autoplay>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img1} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img2} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img3} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img4} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img5} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img6} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img7} alt="фотография с книгами" />
        </div>
      </div>
      <div>
        <div className={css.content}>
          <img className={css.img} src={img8} alt="фотография с книгами" />
        </div>
      </div>
    </StyledCarousel>
  </>
);

export default Carousel;
