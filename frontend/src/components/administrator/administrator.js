/* eslint-disable react/prop-types */
import React from "react";
import { Comment, Form, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// import css from "./administrator.module.css";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Опубликовать
      </Button>
    </Form.Item>
  </>
);

export const Administrator = () => {
  return (
    <>
      {/* {comments.length > 0 && <CommentList comments={comments} />} */}
      <Comment
        content={
          <Editor
          // onChange={this.handleChange}
          // onSubmit={this.handleSubmit}
          // submitting={submitting}
          // value={value}
          />
        }
      />
    </>
  );
};

export const ButtonAdd = () => {
  return <Button type="primary" shape="circle" icon={<PlusOutlined />} />;
};
