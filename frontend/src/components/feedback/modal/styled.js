import { Modal } from "antd";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)`
  .ant-modal-title {
    display: flex;
    justify-content: center;
  }

  .ant-form-item-control-input-content textarea {
    height: 250px;
  }
`;

export default StyledModal;
