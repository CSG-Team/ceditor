import React, { createContext, useState } from "react";

type IContextProps = {
  setEditor: React.Dispatch<any>;
  editor: any;
  setInFocus: React.Dispatch<boolean>;
  inFocus: boolean;
};

export const EditorContext = createContext<IContextProps>({
  setEditor: () => {},
  editor: null,
  setInFocus: () => {},
  inFocus: true,
});

const EditorProvider = (props) => {
  const [editor, setEditor] = useState(null);
  const [inFocus, setInFocus] = useState(true);

  console.log("editor:::", editor);

  return (
    <EditorContext.Provider
      value={{
        editor,
        setEditor,
        inFocus,
        setInFocus
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
