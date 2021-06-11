import React from "react";
import { Divider, Image } from "antd";
import StyledTitle from "../style/styled-title";
import StyledText from "../style/styled-text";
import "antd/dist/antd.css";
import css from "./page-contacts.module.css";

const PageContacts = () => {
  return (
    <div className={css.contacts}>
      <StyledTitle level={2}>Контакты и режим работы</StyledTitle>
      <Image
        className={css.img}
        src="https://auditoriya.vogu35.ru/wp-content/uploads/2021/01/DSC9494-scaled.jpg"
      />
      <div className={css.blok}>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>Директор</StyledTitle>
        </Divider>
        <StyledText>Меньшакова Любовь Владимировна</StyledText>
        <StyledText>
          ул. Галкинская, 1 (к. 4) тел. 8 (8172) 72-10-12 (276, 139)
        </StyledText>
        <StyledText>e-mail: library@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>Отдел комплектования фондов</StyledTitle>
        </Divider>
        <StyledText>
          ул. Галкинская, 1 (к. 9) тел. 8 (8172) 72-10-12 (279)
        </StyledText>
        <StyledText>e-mail: ok@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>
            Отдел научной обработки, каталогизации и книгообеспеченности
          </StyledTitle>
        </Divider>
        <StyledText>
          ул. Галкинская, 1 (к. 30) тел. 8 (8172) 72-10-12 (278)
        </StyledText>
        <StyledText>e-mail: lib_uchet@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00 </StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>
            Отдел справочно-библиографического и информационного обслуживания
          </StyledTitle>
        </Divider>
        <StyledText>
          ул. Галкинская, 1 (к. 25) тел. 8 (8172) 72-10-12 (139)
        </StyledText>
        <StyledText>e-mail: lib@vogu35.ru</StyledText>
        <StyledText>понедельник - пятница - 08.00 – 17.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>
            Отдел компьютеризации и автоматизации библиотечных процессов
          </StyledTitle>
        </Divider>
        <StyledText>Заведующий отделом: Боберский Владимир Петрович</StyledText>
        <StyledText>
          ул. Галкинская, 1 (к. 25) тел. 8 (8172) 72-10-12 (139)
        </StyledText>
        <StyledText>e-mail: sk@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>
            Отдел абонементов и читальных залов
          </StyledTitle>
        </Divider>
        <StyledText>
          Заведующий отделом: Рустамова Елена Витальевна lib_ab1@vogu35.ru
        </StyledText>
        <Divider orientation="left" className={css.title}>
          <StyledTitle level={4}>
            Библиотека Университетского колледжа
          </StyledTitle>
        </Divider>
        <StyledText>
          Заведующий библиотекой: Козлова Лариса Александровна
        </StyledText>
        <StyledText>
          ул. Ильюшина, 15 (к. 21) тел. 8 (8172) 51-36-91 (29)
        </StyledText>
        <StyledText>e-mail: lib_uk@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 16.30</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
      </div>
    </div>
  );
};

export default PageContacts;
