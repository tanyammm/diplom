import React from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { StyledButtonOrange } from "../style/styled-button-orange";
import { useRootData } from "../../hooks/use-root-data";

const { Text } = Typography;

export const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  padding: 20px;
  width: 301px;
  max-height: 301px;
`;

const StyledResult = styled(Text)`
  font-size: 24px;
`;

export const Result = () => {
  const { quantityProducts } = useRootData((store) => ({
    quantityProducts: store.mainStore.quantityProducts,
  }));
  return <StyledResult>Итог {quantityProducts} ₽</StyledResult>;
};

const StyledProduct = styled(Text)`
  padding-top: 5%;
`;

export const Product = () => {
  const { numberPurchases } = useRootData((store) => ({
    numberPurchases: store.mainStore.numberPurchases,
  }));
  return <StyledProduct>Товаров {numberPurchases} шт.</StyledProduct>;
};

export const StyledButton = styled(StyledButtonOrange)`
  margin-top: 45%;
  padding: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
