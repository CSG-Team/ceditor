import React, { createContext, useState } from "react";

import EditorCore from "@component/editor-core";
import Toolbar from "@component/toolbar/mini-toolbar";
import EditorProvider from "@component/editor-core/ctx";
import HoveringToolbar from '@component/toolbar/hovering-toolbar'
import styles from "./index.module.less";


export default () => {
  return (
    <EditorProvider>
      <div className={styles.mainWrapper}>
        <div className={styles.editorSection}>
          <EditorCore />
        </div>

        <div className={styles.toolbarSection}>
          <Toolbar />
        </div>
      </div>
    </EditorProvider>
  );
};
