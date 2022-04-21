import React, { useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Slate, Editable, withReact, useSlate, useFocused } from "slate-react";
import { Editor, Range } from "slate";

// import { Button, Icon, Menu, Portal } from '../components'
import { EditorContext } from "@component/editor-core/ctx";
import {
  isFormatActive,
  toggleFormat,
} from "@component/editor-core/toggle/format";
import Button from "@component/button/text-hover-btn";

import styles from "./index.module.less";

const Portal = ({ children }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement | null>();
  const editor = useSlate()

  // const { editor, } = useContext(EditorContext);

  const inFocus = useFocused()

  useEffect(() => {
    const el = ref.current;
    console.log(editor)
    console.log(inFocus)

    if(!editor) return
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      // !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }

    console.log('存在选曲')

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = "1";
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`;
  });

  return editor &&  (
    <Portal>
      <div
        ref={ref}
        className={styles.menu}
        onMouseDown={(e) => {
          // prevent toolbar from taking focus away from editor
          e.preventDefault();
        }}
      >
        <FormatButton editor={editor} type="bold" />
        <FormatButton editor={editor} type="italic" />
        <FormatButton editor={editor} type="underline" />
      </div>
    </Portal>
  );
};

const FormatButton = ({ editor, type }) => {
  return (
    <Button
      type={type}
      active={isFormatActive(editor, type)}
      onClick={() => toggleFormat(editor, type)}
    />
  );
};

export default HoveringToolbar;
