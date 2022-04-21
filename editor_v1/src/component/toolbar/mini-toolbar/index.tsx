import React, { useCallback, useMemo, useContext } from "react";
import styles from "./index.module.less";

import { EditorContext } from "@component/editor-core/ctx";
import { BlockButton } from "@component/button";

export default () => {
  const { editor } = useContext(EditorContext);
  return (
    <div className={styles.miniBarWrapper}>
      <BlockButton editor={editor} type="h1" />
      <BlockButton editor={editor} type="h2" />
      <BlockButton editor={editor} type="block-quote"  />
      <BlockButton editor={editor} type="numbered-list"  />
      <BlockButton editor={editor} type="bulleted-list"  />

      <BlockButton editor={editor} type="left" />
      <BlockButton editor={editor} type="center" />

      <BlockButton editor={editor} type="right" />
      <BlockButton editor={editor} type="justify" />
    </div>
  );
};
