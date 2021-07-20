import React from "react";
import { Affix, Button } from "antd";
import { MessageFilled } from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import Modal from "./modal";
import "antd/dist/antd.css";
import css from "./feedback.module.css";

const Feedback = () => {
  const { openShowModal } = useRootData((store) => ({
    openShowModal: store.mainStore.openShowModal,
  }));

  return (
    <>
      {window.innerWidth > 768 ? (
        <Affix offsetTop={window.innerHeight / 2}>
          <Button
            className={css.feedback}
            type="primary"
            onClick={openShowModal}
            data-testid="feedback"
          >
            Обратная связь
          </Button>
        </Affix>
      ) : (
        <Affix offsetTop={window.innerHeight / 1.1} className={css.affix}>
          <MessageFilled
            className={css.feedbackMobile}
            onClick={openShowModal}
          />
        </Affix>
      )}

      <Modal />
    </>
  );
};

export default Feedback;
