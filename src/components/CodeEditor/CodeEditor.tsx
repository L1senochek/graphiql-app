import { useRef } from 'react';
import styles from './code-editor.module.scss';
import ICodeEditorProps from '@/model/components/CodeEditor/CodeEditor';
import { useAppDispatch } from '@/store/hooks';

const CodeEditor: React.FC<ICodeEditorProps> = ({
  textareaCode,
  setTextareaCode,
  lineNumbers,
  setLineNumbers,
  classNameCodeEditor,
}): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const handleInput = () => {
    if (textareaRef.current) {
      const content = textareaRef.current.value;
      dispatch(setTextareaCode(content));

      const lineCount = content.split('\n').length + 1;
      const newLineNumbers = Array.from(
        { length: lineCount },
        (_, index) => index + 1
      );
      dispatch(setLineNumbers(newLineNumbers));
    }
  };

  return (
    <div
      className={`${styles['code-editor']}${
        classNameCodeEditor ? ` ${classNameCodeEditor}` : ''
      }`}
    >
      <div className={styles['code-editor__wrapper']}>
        <div className={styles['code-editor__line-numbers']}>
          {lineNumbers.map((number: number) => (
            <span
              className={styles['code-editor__line-numbers_item']}
              key={number}
              data-testid="line-number"
            >
              {number}
            </span>
          ))}
        </div>
        <textarea
          className={styles['code-editor__code-area']}
          value={textareaCode}
          onChange={handleInput}
          ref={textareaRef}
          rows={lineNumbers.length}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
