import { Card } from "antd";
import styled from "@emotion/styled";

const { Meta } = Card;

export const StyledCard = styled(Card)`
  cursor: default;
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledMeta = styled(Meta)`
  margin-top: 10px;
  margin-bottom: 10px;
  .ant-card-meta-detail,
  .ant-card-meta-description {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .ant-card-meta-title {
    font-weight: 600;
  }
`;
