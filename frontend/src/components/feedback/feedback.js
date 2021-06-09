import React from "react";
import { Affix, Button } from "antd";
import { useRootData } from "../../hooks/use-root-data";
import Modal from "./modal";
import "antd/dist/antd.css";
import css from "./feedback.module.css";

const Feedback = () => {
  const { openShowModal } = useRootData((store) => ({
    openShowModal: store.mainStore.openShowModal,
  }));

  return (
    <div>
      <Affix offsetTop={508.96}>
        <Button
          className={css.feedback}
          type="primary"
          onClick={openShowModal}
          data-testid="feedback"
        >
          Обратная связь
        </Button>
      </Affix>
      <Modal />
    </div>
  );
};

export default Feedback;
