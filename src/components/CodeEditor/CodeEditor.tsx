import { useRef } from 'react';
import styles from './code-editor.module.scss';
import ICodeEditorProps from '@/model/components/CodeEditor/CodeEditor';

const CodeEditor: React.FC<ICodeEditorProps> = ({
  textareaCode,
  setTextareaCode,
  lineNumbers,
  setLineNumbers,
  classNameCodeEditor,
}): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      const content = textareaRef.current.value;
      setTextareaCode(content);

      const lineCount = content.split('\n').length;
      const newLineNumbers = Array.from(
        { length: lineCount },
        (_, index) => index + 1
      );
      setLineNumbers(newLineNumbers);
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
