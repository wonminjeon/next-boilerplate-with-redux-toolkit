import React from "react";

import styles from "./Test.module.css";

const Test = ({ version }) => {
  return <span className={styles.indexWrapper}>{version}</span>;
};

export default Test;
