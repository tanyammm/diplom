import React from "react";
import { Typography } from "antd";
import { StyledTitle, StyledText, StyledContacts } from "../style";
import Carousel from "../../carousel";
import "antd/dist/antd.css";
import css from "./page-documents.module.css";

const PageDocuments = () => {
  const { Link } = Typography;

  return (
    <>
      {Carousel}
      <div className={css.documents}>
        <StyledTitle level={2}>Документы</StyledTitle>
        <StyledText className={css.indent}>
          Вы можете скачать наши официальные документы по ссылкам ниже:
        </StyledText>
        <StyledText>
          <ul className={css.ul}>
            <li>
              <Link href="https://vogu35.ru/sveden/document?template=JTrololo">
                сведения о ФГБОУ ВПО «Вологодский государственный университет»;
              </Link>
            </li>
            <li>
              <Link href="https://vogu35.ru/politiki/obrabotka-personalnyh-dannyh">
                политика в области обработки персональных данных;
              </Link>
            </li>
            <li>
              <Link href="https://vogu35.ru/prochie-platnye-uslugi">
                платные услуги ФГБОУ ВПО «Вологодский государственный
                университет»;
              </Link>
            </li>
            <li>
              <Link href="http://library.vogu35.ru/download/2017/pologen.pdf">
                положение об ИБК ВоГУ;
              </Link>
            </li>
            <li>
              <Link href="http://library.vogu35.ru/download/2017/pravila.pdf">
                правила пользования библиотекой;
              </Link>
            </li>
            <li>
              <Link href="http://library.vogu35.ru/download/15_Polozhenije_Elektr_inform_obraz_sreda.pdf">
                положение об электронной информационно-образовательной среде
                ФГБОУ ВО «Вологодский государственный университет»;
              </Link>
            </li>
            <li>
              <Link href="http://library.vogu35.ru/download/seor2017.pdf">
                положение о системе электронных образовательных ресурсов.
              </Link>
            </li>
          </ul>
        </StyledText>
        <StyledContacts />
      </div>
    </>
  );
};

export default PageDocuments;
