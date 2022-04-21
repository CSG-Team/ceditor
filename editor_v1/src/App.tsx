import React from "react";

import CEditor from "@component/editor";


import styles from './app.module.less'

function App() {

  return (
    <div className={styles.container}>
      <p>测试 editor</p>

      <CEditor />
    </div>
  );
}

export default App;
