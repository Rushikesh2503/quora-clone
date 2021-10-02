import React from "react";

import styles from "../styles/secondmiddle.module.css";
import Paper from "@mui/material/Paper";

const paper_secondmiddle = {
  marginBottom: "10px",
  height: "80px"
};
const Second_middle = () => {
  return (
    <Paper sx={paper_secondmiddle} variant="outlined">
      <div className={styles.second_middle}>
        <div className={styles.profile_image_name}>
          <div className={styles.name_image}>
            <img
              className={styles.profile_image}
              height="20"
              width="20"
              src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt=""
            />
            <p>Amit Mehta</p>
          </div>
          <div className={styles.questionasked}>
            <h4>What is your question or link?</h4>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Second_middle;
