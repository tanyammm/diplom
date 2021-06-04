import axios from "axios";

const sendEmailFeedback = (
  nameModal,
  emailModal,
  phoneModal,
  themeModal,
  messageModal,
  fileModal
) =>
  axios({
    method: "post",
    url: "http://localhost:8000/feedback",
    data: {
      nameModal,
      emailModal,
      phoneModal,
      themeModal,
      messageModal,
      fileModal,
    },
  });

export default sendEmailFeedback;
