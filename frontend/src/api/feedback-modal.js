import axios from "axios";

const sendEmailFeedback = (nameModal, emailModal, phoneModal, messageModal) =>
  axios({
    method: "post",
    url: "http://localhost:8000/feedback",
    data: {
      nameModal,
      emailModal,
      phoneModal,
      messageModal,
    },
  });

export default sendEmailFeedback;
