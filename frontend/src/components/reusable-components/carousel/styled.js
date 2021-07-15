import { Carousel } from "antd";
import styled from "@emotion/styled";

const StyledCarousel = styled(Carousel)`
  button {
    padding: 10px !important;
    border-radius: 10px !important;
  }

  .slick-dots.slick-dots-bottom {
    display: flex;
    justify-content: space-evenly;
    margin-left: 37%;
    margin-right: 37%;
  }
`;

export default StyledCarousel;
