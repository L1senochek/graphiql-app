import { useState } from 'react';
import styles from './variables-editor.module.scss';
import CodeEditor from '@/components/CodeEditor/CodeEditor';

const VariablesEditor: React.FC = (): JSX.Element => {
  const [variablesCode, setVariablesCode] = useState('');
  const [lineNumbers, setLineNumbers] = useState<number[]>([1]);

  console.log(variablesCode, 'variablesCode');

  return (
    <div className={styles['variables-editor']}>
      <h4 className={styles['variables-editor__title']}>VariablesEditor</h4>
      <CodeEditor
        textareaCode={variablesCode}
        setTextareaCode={setVariablesCode}
        lineNumbers={lineNumbers}
        setLineNumbers={setLineNumbers}
        classNameCodeEditor={styles['variables-editor__code-editor']}
      />
    </div>
  );
};

export default VariablesEditor;
