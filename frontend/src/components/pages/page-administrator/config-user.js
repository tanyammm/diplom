const data = [
  {
    type: "Январь",
    sales: 38,
  },
  {
    type: "Февраль",
    sales: 52,
  },
  {
    type: "Март",
    sales: 61,
  },
  {
    type: "Апрель",
    sales: 145,
  },
  {
    type: "Май",
    sales: 48,
  },
  {
    type: "Июнь",
    sales: 38,
  },
  {
    type: "Июль",
    sales: 138,
  },
  {
    type: "Август",
    sales: 38,
  },
  {
    type: "Сентябрь",
    sales: 38,
  },
  {
    type: "Октябрь",
    sales: 38,
  },
  {
    type: "Ноябрь",
    sales: 38,
  },
  {
    type: "Декабрь",
    sales: 12,
  },
];

const configUser = {
  data,
  xField: "type",
  yField: "sales",
  label: {
    position: "middle",
    style: {
      fill: "#FFFFFF",
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    sales: { alias: "Количество посетителей" },
  },
};

export default configUser;
