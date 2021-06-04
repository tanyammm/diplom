import { Alert } from "antd";
import styled from "@emotion/styled";

const StyledAlert = styled(Alert)`
  .ant-alert-content {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .anticon.anticon-check-circle.ant-alert-icon {
    padding-top: 20px;
    padding-left: 20px;
  }

  .ant-alert-message {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
  }

  .ant-alert-description {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
`;

export default StyledAlert;
