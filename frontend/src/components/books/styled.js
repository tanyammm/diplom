import { Card } from "antd";
import styled from "@emotion/styled";

const { Meta } = Card;

export const StyledCard = styled(Card)`
  background: #f6f6f6;
  cursor: default;
`;

export const StyledMeta = styled(Meta)`
  margin-top: 10px;
  margin-bottom: 10px;
  .ant-card-meta-detail,
  .ant-card-meta-description {
    text-align: center;
  }
  .ant-card-meta-description {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .ant-card-meta-title {
    font-weight: 600;
  }
`;
