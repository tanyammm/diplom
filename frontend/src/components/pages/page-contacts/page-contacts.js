import React from "react";
import { Divider, Image, Typography } from "antd";
import { StyledTitle, StyledText } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import { Administrator, ButtonAdd } from "../../administrator/administrator";
import "antd/dist/antd.css";
import css from "./page-contacts.module.css";

const PageContacts = () => {
  const { Text } = Typography;

  const { administrator } = useRootData((store) => ({
    administrator: store.mainStore.administrator,
  }));

  return (
    <div className={css.contacts}>
      <StyledTitle level={2}>Контакты и режим работы</StyledTitle>
      <Image
        className={css.img}
        src="https://auditoriya.vogu35.ru/wp-content/uploads/2021/01/DSC9494-scaled.jpg"
      />
      <div>
        <Divider orientation="left">
          <StyledTitle level={4}>Директор</StyledTitle>
        </Divider>
        <StyledText>
          <Text strong>Воскресенская Оксана Владимировна</Text>
        </StyledText>
        <StyledText>
          ул. Галкинская, 1 (к. 4) тел. 8 (8172) 72-10-12 (276, 139)
        </StyledText>
        <StyledText>
          e-mail: library@vogu35.ru, voskresenskaiaov@vogu35.ru
        </StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left">
          <StyledTitle level={4}>Отдел комплектования фондов</StyledTitle>
        </Divider>
        <StyledText>
          ул. Галкинская, 1 (к. 9) тел. 8 (8172) 72-10-12 (279)
        </StyledText>
        <StyledText>e-mail: ok@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left">
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
        <Divider orientation="left">
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
        <Divider orientation="left">
          <StyledTitle level={4}>
            Отдел компьютеризации и автоматизации библиотечных процессов
          </StyledTitle>
        </Divider>
        <StyledText>
          <Text strong>Заведующий отделом: Боберский Владимир Петрович</Text>
        </StyledText>
        <StyledText>
          ул. Галкинская, 1 (к. 25) тел. 8 (8172) 72-10-12 (139)
        </StyledText>
        <StyledText>e-mail: sk@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 17.00</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
        <Divider orientation="left">
          <StyledTitle level={4}>
            Отдел абонементов и читальных залов
          </StyledTitle>
        </Divider>
        <StyledText>
          <Text strong>
            Заведующая отделом: Рустамова Елена Витальевна lib_ab1@vogu35.ru
          </Text>
        </StyledText>
        <StyledText>
          <ul className={css.ul}>
            <li>
              <StyledText>
                <Text strong>Абонемент-1 (АБ-1)</Text>
              </StyledText>

              <StyledText>
                ул. Галкинская, 1 (к. 23) тел. 8 (8172) 72-10-12 (185)
              </StyledText>
              <StyledText>e-mail: lib_ab1@vogu35.ru</StyledText>
              <StyledText>понедельник - пятница - 09.00 – 17.00</StyledText>
              <StyledText>выходные дни: сб., вс.</StyledText>
            </li>
            <li>
              <StyledText>
                <Text strong>Абонемент-2 (АБ-2)</Text>
              </StyledText>
              <StyledText>
                ул. С. Орлова, 6 (к. 102) тел. 8 (8172) 72-25-00
              </StyledText>
              <StyledText>e-mail: lib_ab2@vogu35.ru</StyledText>
              <StyledText>понедельник - пятница - 09.00 – 17.00</StyledText>
              <StyledText>выходные дни: сб., вс.</StyledText>
            </li>
            <li>
              <StyledText>
                <Text strong>Читальный зал-1 (ЧЗ-1)</Text>
              </StyledText>
              <StyledText>
                ул. Галкинская, 1 (к. 30, 31) тел. 8 (8172) 72-10-12 (142)
              </StyledText>
              <StyledText>e-mail: lib_chz1@vogu35.ru</StyledText>
              <StyledText>
                понедельник - пятница - 11.00 – 13.00; 14.00 - 16.00
              </StyledText>
              <StyledText>выходные дни: сб., вс.</StyledText>
            </li>
            <li>
              <StyledText>
                <Text strong>Читальный зал-3 (ЧЗ-3)</Text>
              </StyledText>
              <StyledText>
                ул. С. Орлова, 6 (к. 316) тел. 8 (8172) 72-25-00
              </StyledText>
              <StyledText>e-mail: lib_chz3@vogu35.ru</StyledText>
              <StyledText>понедельник - четверг 08.00 – 16.30</StyledText>
              <StyledText>пятница 08.00 – 15.00</StyledText>
              <StyledText>выходные дни: сб., вс.</StyledText>
            </li>
            <li>
              <StyledText>
                <Text strong>Читальный зал-4 (ЧЗ-4)</Text>
              </StyledText>
              <StyledText>пр. Победы, 37 тел. 8 (8172) 72-52-60</StyledText>
              <StyledText>e-mail: lib_chz4@vogu35.ru</StyledText>
              <StyledText>понедельник - пятница - 08.00 – 17.00</StyledText>
              <StyledText>выходные дни: сб., вс.</StyledText>
            </li>
          </ul>
        </StyledText>
        <Divider orientation="left">
          <StyledTitle level={4}>
            Библиотека Университетского колледжа
          </StyledTitle>
        </Divider>
        <StyledText>
          <Text strong>
            Заведующая библиотекой: Козлова Лариса Александровна
          </Text>
        </StyledText>
        <StyledText>
          ул. Ильюшина, 15 (к. 21) тел. 8 (8172) 51-36-91 (29)
        </StyledText>
        <StyledText>e-mail: lib_uk@vogu35.ru</StyledText>
        <StyledText>понедельник - четверг 08.00 – 16.30</StyledText>
        <StyledText>пятница - 08.00 – 15.00</StyledText>
        <StyledText>выходные дни: сб., вс.</StyledText>
      </div>
      {administrator ? (
        <>
          <ButtonAdd />
          <Administrator />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PageContacts;
