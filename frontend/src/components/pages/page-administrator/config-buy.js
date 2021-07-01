const data = [
  {
    name: "Количество скачиваний",
    type: "Январь",
    sales: 18.9,
  },
  {
    name: "Количество скачиваний",
    type: "Февраль",
    sales: 28.8,
  },
  {
    name: "Количество скачиваний",
    type: "Март",
    sales: 39.3,
  },
  {
    name: "Количество скачиваний",
    type: "Апрель",
    sales: 81.4,
  },
  {
    name: "Количество скачиваний",
    type: "Май",
    sales: 47,
  },
  {
    name: "Количество скачиваний",
    type: "Июнь",
    sales: 20.3,
  },
  {
    name: "Количество скачиваний",
    type: "Июль",
    sales: 24,
  },
  {
    name: "Количество скачиваний",
    type: "Август",
    sales: 35.6,
  },
  {
    name: "Количество скачиваний",
    type: "Сентябрь",
    sales: 35.6,
  },
  {
    name: "Количество скачиваний",
    type: "Октябрь",
    sales: 35.6,
  },
  {
    name: "Количество скачиваний",
    type: "Ноябрь",
    sales: 35.6,
  },
  {
    name: "Количество скачиваний",
    type: "Декабрь",
    sales: 35.6,
  },
  {
    name: "Количество покупок",
    type: "Январь",
    sales: 12.4,
  },
  {
    name: "Количество покупок",
    type: "Февраль",
    sales: 23.2,
  },
  {
    name: "Количество покупок",
    type: "Март",
    sales: 34.5,
  },
  {
    name: "Количество покупок",
    type: "Апрель",
    sales: 99.7,
  },
  {
    name: "Количество покупок",
    type: "Май",
    sales: 52.6,
  },
  {
    name: "Количество покупок",
    type: "Июнь",
    sales: 35.5,
  },
  {
    name: "Количество покупок",
    type: "Июль",
    sales: 37.4,
  },
  {
    name: "Количество покупок",
    type: "Август",
    sales: 42.4,
  },
  {
    name: "Количество покупок",
    type: "Сентябрь",
    sales: 42.4,
  },
  {
    name: "Количество покупок",
    type: "Октябрь",
    sales: 42.4,
  },
  {
    name: "Количество покупок",
    type: "Ноябрь",
    sales: 42.4,
  },
  {
    name: "Количество покупок",
    type: "Декабрь",
    sales: 42.4,
  },
];

const configBuy = {
  data,
  isGroup: true,
  xField: "type",
  yField: "sales",
  seriesField: "name",
  label: {
    position: "middle",
    layout: [
      { type: "interval-adjust-position" },
      { type: "interval-hide-overlap" },
      { type: "adjust-color" },
    ],
  },
};

export default configBuy;
