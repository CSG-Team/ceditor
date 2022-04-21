import React, { useMemo } from "react";
import { toggleBlock, isBlockActive, TEXT_ALIGN_TYPES } from '@component/editor-core/toggle/block'
import MiniBtn from "./mini-btn";

export const BlockButton = (props: any) => {
  // const enable = useMemo(() => {
  //   return !isBlockActive(
  //     editor,
  //     format,
  //     TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  //   );
  // }, []);
  return (
    <MiniBtn
      type={props?.type}
      onClick={(event) => {
        event?.preventDefault();
        toggleBlock(props?.editor, props?.type);
      }}
    />
  );
};
 