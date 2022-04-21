import React, { useCallback, useMemo, useContext, useEffect } from 'react'
import { useMemoizedFn } from 'ahooks'
import { Editable, withReact, useSlate, useFocused, Slate } from 'slate-react'
import {
  Editor,
  createEditor,
} from 'slate'
import { withHistory } from 'slate-history'

import HoveringToolbar from '@component/toolbar/hovering-toolbar'
import { INIT_VALUES, PLACE_HOLDER } from '@constant/initValues'
import { handleHotKeyDown } from './hot-key'

import Element from './render-element'
import Leaf from './render-leaf'
import { EditorContext } from './ctx'


export default () => {

  const editor = useMemo(() => withHistory(withReact(createEditor() as any)), [])


  const renderElement = useMemoizedFn(props => <Element {...props} />)


  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const { setEditor, setInFocus } = useContext(EditorContext)

  const inFocus = useFocused();
  console.log('inFocus"""""', inFocus)


  useEffect(() => {
    setEditor(editor)
  }, [editor])

  useEffect(() => {
    setInFocus(inFocus)
  }, [inFocus])


  return (
    <Slate editor={editor} value={INIT_VALUES}>
      <HoveringToolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder={PLACE_HOLDER}
        spellCheck
        autoFocus
        onKeyDown={event => { handleHotKeyDown(event, editor)}}
      />

    </Slate>
  )
}

