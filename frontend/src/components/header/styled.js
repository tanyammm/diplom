import { Input } from "antd";
import styled from "@emotion/styled";

const { Search } = Input;

const StyledSearchInput = styled(Search)`
  .ant-input,
  .ant-btn.ant-btn-primary.ant-input-search-button,
  .ant-input-group-addon {
    background: #0a1c40;
    border: 1px solid #0a1c40;
    border-right-width: 2px !important;
    color: white;
  }

  .ant-input-group-addon :hover,
  .ant-input-group-addon :focus {
    border-color: #1890ff !important;
  }
`;

export default StyledSearchInput;
