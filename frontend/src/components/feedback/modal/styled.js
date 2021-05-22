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

  .ant-checkbox-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

export default StyledModal;
