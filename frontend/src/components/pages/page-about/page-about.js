import React, { useState } from "react";
import { Divider, Image } from "antd";
import { StyledTitle, StyledText } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import { StyledContacts } from "../../reusable-components";
import "antd/dist/antd.css";
import css from "./page-about.module.css";

const PageAbout = () => {
  const { administrator } = useRootData((store) => ({
    administrator: store.mainStore.administrator,
  }));

  const [title, setTitle] = useState(
    "Информационно-библиотечный комплекс ВоГУ"
  );

  const [text1, setText1] = useState(
    "Информационно-библиотечный комплекс ВоГУ – одно из крупнейших книжных собраний Вологодской области, методический центр библиотек высших учебных заведений. Приказом Рособразования библиотеке присвоена 1 категория. ИБК ВоГУ сегодня – это исследовательский, информационный, образовательный, консультационный центр, дипломант международных научно-практических конференций, участник конкурсов инновационных проектов и программ. Деятельность библиотеки осуществляется на основе принципов системы менеджмента качества."
  );

  const [text2, setText2] = useState(
    "Объединенный универсальный фонд формируется в соответствии с требованиями федеральных государственных образовательных стандартов, направлениями и профилями подготовки в ВоГУ, с учетом приоритетов электронного документного ресурса и насчитывает 5,6 млн. экземпляров, в том числе 3,7 млн. электронных изданий. Особое место занимает собрание редких книг и книжных памятников, изданных в XVIII – начале XX вв., насчитывающее порядка 4 тысяч экз."
  );

  const [text3, setText3] = useState(
    "Располагая современной технической инфраструктурой, библиотека является активным участником образовательного процесса. Электронные ресурсы библиотеки доступны всем категориям пользователей вуза в локальном и удаленном доступе. «Система электронных образовательных ресурсов (СЭОР)», разработанная сотрудниками ИБК ВоГУ, функционирует как единая точка доступа к коллекциям научно-образовательного назначения, объединяющая профильные полнотекстовые ресурсы всех видов, включая доступ к образовательным порталам ВоГУ."
  );

  const [text4, setText4] = useState(
    "В числе модулей, интегрированных в СЭОР – электронная библиотека трудов ученых ВоГУ; специализированные базы данных; учебно-образовательные ресурсы по направлениям подготовки ВоГУ; научные ресурсы Роспатента, ВИНИТИ РАН, ВолНЦ РАН, УИС Россия, Научной электронной библиотеки eLIBRARY.RU. Обеспечен доступ к электронно-библиотечным системам, содержащим издания по изучаемым дисциплинам. Электронный каталог библиотеки насчитывает свыше 600000 библиографических записей."
  );

  const [text5, setText5] = useState(
    " Открыт доступ к базам данных международного научного издательства Springer Nature: Springer Journals, Springer Reference, Springer Link, Springer Nature, Springer Materials, Springer Protocols, zbMATH, Nano (при поддержке РФФИ). В рамках контракта с Консорциумом НЭИКОН обеспечен доступ к монографиям ведущих университетских издательств на платформе компании JSTOR (University of California Press, University of Michigan Press, New York University Press, University Press of Colorado, Cornell University Press и др.), базе данных Polpred.com Обзор СМИ (архив публикаций СМИ за 15 лет)."
  );

  const [text6, setText6] = useState(
    "Обеспечен доступ к информационной системе «Научный архив» – более 2 млн. научных работ: диссертации, авторефераты, препринты, публикации открытых архивов информации и др.; базе данных EBSCO Open Dissertations – более 800 000 диссертаций и дипломных работ; порталу patscape.ru – cистеме поиска патентной информации; базам данных AIP Publishing и IOP Publishing (авторитетные рецензируемые научные издания в области химии, физики и биологии, а также смежных тематик: биофизики, биомедицины, астрономии, нанотехнологии, приборостроения, радиотехники и т.д.)."
  );

  const [text7, setText7] = useState(
    "Информационно-библиотечный комплекс ВоГУ осуществляет комплекс работ по информационно-аналитическому сопровождению научно-публикационной деятельности вуза, анализ публикационной активности ученых ВоГУ в базах РИНЦ, Web of Science, Scopus; специализированных информационно-аналитических системах Google Scholar, Agris, ERIH PLUS и т.п."
  );

  const [text8, setText8] = useState(
    "Осуществляется информационное сопровождение разработки рабочих программ по всем направлениям и профилям подготовки, что позволяет обеспечить их соответствие требованиям ФГОС в части информационного обеспечения учебных дисциплин."
  );

  const [text9, setText9] = useState(
    "В числе приоритетных направлений деятельности – реализация творческих и просветительских проектов. Направленность проекта «Страницы творческой биографии» – сохранение и популяризация трудов ученых ВоГУ как части научного наследия региона; мероприятия проекта «Галерея сокровищ» направлены на содействие развитию научно-педагогической и научно-исследовательской деятельности кафедр, научных и творческих студенческих объединений; являются «стартовой площадкой» для будущих профессионалов в области архитектуры, реставрации."
  );

  const [text10, setText10] = useState(
    "Деятельность Информационно-библиотечного комплекса отмечена почетными грамотами и благодарственными письмами Департамента образования Вологодской области, Централизованной библиотечно-информационной комиссии Министерства образования и науки РФ, учреждений и частных лиц-соорганизаторов реализуемых библиотекой проектов."
  );

  const [text11, setText11] = useState(
    "Концептуальные основания дальнейшего развития библиотеки ориентированы на обеспечение функционирования ИБК ВоГУ как информационно-инфраструктурного комплекса, содействующего научной, инновационной, образовательной, воспитательной деятельности ВоГУ; соответствие приоритетным задачам университета и изменяющимся социокультурным тенденциям."
  );

  const video = (
    <iframe
      title="Как пройти в библиотеку?"
      src="https://vk.com/video_ext.php?oid=-76636384&id=169873419&hash=04b0957e470cde38"
      className={css.iframe}
      frameBorder="0"
      allowFullScreen
    />
  );

  return (
    <div className={css.about}>
      {administrator ? (
        <>
          <StyledTitle level={2} editable={{ onChange: setTitle }}>
            {title}
          </StyledTitle>
          {video}
          <Divider orientation="left" className={css.title}>
            <StyledTitle level={4}>О нас</StyledTitle>
          </Divider>
          <StyledText className={css.text} editable={{ onChange: setText1 }}>
            {text1}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText2 }}>
            {text2}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText3 }}>
            {text3}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText4 }}>
            {text4}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText5 }}>
            {text5}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText6 }}>
            {text6}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText7 }}>
            {text7}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText8 }}>
            {text8}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText9 }}>
            {text9}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText10 }}>
            {text10}
          </StyledText>
          <StyledText className={css.text} editable={{ onChange: setText11 }}>
            {text11}
          </StyledText>
        </>
      ) : (
        <>
          <StyledTitle level={2}>{title}</StyledTitle>
          {video}
          <Divider orientation="left" className={css.title}>
            <StyledTitle level={4}>О нас</StyledTitle>
          </Divider>
          <StyledText className={css.text}>{text1}</StyledText>
          <StyledText className={css.text}>{text2}</StyledText>
          <StyledText className={css.text}>{text3}</StyledText>
          <StyledText className={css.text}>{text4}</StyledText>
          <StyledText className={css.text}>{text5}</StyledText>
          <StyledText className={css.text}>{text6}</StyledText>
          <StyledText className={css.text}>{text7}</StyledText>
          <StyledText className={css.text}>{text8}</StyledText>
          <StyledText className={css.text}>{text9}</StyledText>
          <StyledText className={css.text}>{text10}</StyledText>
          <StyledText className={css.text}>{text11}</StyledText>
        </>
      )}

      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Мы в новостях</StyledTitle>
      </Divider>
      <iframe
        title="Репортаж о библиотеке"
        src="https://vk.com/video_ext.php?oid=-76636384&id=456239054&hash=00c92257205ffc50"
        className={css.iframe}
        frameBorder="0"
        allowFullScreen
      />
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Наши мероприятия</StyledTitle>
      </Divider>
      <iframe
        title="Лига интеллектуальных игр ВоГУ ENIGMA"
        src="https://vk.com/video_ext.php?oid=-76636384&id=456239053&hash=01078406812a74c6"
        className={css.events}
        frameBorder="0"
        allowFullScreen
      />
      <iframe
        title="Открытие выставки в библиотеке ВоГУ"
        src="https://www.youtube.com/embed/ocFTIHd1RSc"
        className={css.events}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        title="Открытие выставки В. Кордюкова"
        src="https://www.youtube.com/embed/bo8LCH9h488"
        className={css.events}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        title="Винницкий А. Мелодия"
        src="https://www.youtube.com/embed/Zkhqsjnc56M"
        className={css.events}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Наши достижения</StyledTitle>
      </Divider>
      <div className={css.preview}>
        <Image.PreviewGroup>
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/01_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/02_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/03_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/04_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/05_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/06_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/07_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/08_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/09_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/10_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/11_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/12_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/13_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/14_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/15_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/16_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/17_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/18_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/19_commend.jpg"
          />
          <Image
            alt="изображение грамоты"
            className={css.img}
            src="http://library.vogu35.ru/images/gr/big/20_commend.jpg"
          />
        </Image.PreviewGroup>
      </div>
      <StyledContacts />
    </div>
  );
};

export default PageAbout;
