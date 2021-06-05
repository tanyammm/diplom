import { Card } from "antd";
import styled from "@emotion/styled";

const { Meta } = Card;

export const StyledCard = styled(Card)`
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledMeta = styled(Meta)`
  margin-bottom: 10px;
  .ant-card-meta-detail,
  .ant-card-meta-description {
    display: flex;
    flex-direction: column;
  }

  .ant-card-meta-title {
    font-weight: 600;
  }
`;
