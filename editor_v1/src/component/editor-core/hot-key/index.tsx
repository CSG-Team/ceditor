import {
  Editor,
} from 'slate'

import isHotkey from 'is-hotkey'
import { ReactEditor } from 'slate-react'

import { HOTKEYS } from '@constant/hotKeys'


type KeyEvent = React.KeyboardEvent<HTMLDivElement>


const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}



/**
 * 处理快捷键
 * @param event 键盘事件
 * @param editor Editor实例
 */
const handleHotKeyDown = (event:KeyEvent , editor: ReactEditor) => {
  for (const hotkey in HOTKEYS) {
    if (isHotkey(hotkey, event as any)) {
      event.preventDefault()
      const mark = HOTKEYS[hotkey]
      toggleMark(editor, mark)
    }
  }
}

export {
  handleHotKeyDown
}