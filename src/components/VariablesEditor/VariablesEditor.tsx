import styles from './variables-editor.module.scss';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import { useAppSelector } from '@/store/hooks';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import {
  selectVariablesCode,
  selectVariablesLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
} from '@/store/slices/queryEditorSlice';

const VariablesEditor: React.FC = (): JSX.Element => {
  const variablesCode = useAppSelector(selectVariablesCode);
  const variablesLineNumbers = useAppSelector(selectVariablesLineNumbers);
  const content = useAppSelector(selectContentGraphiQl);

  return (
    <div className={styles['variables-editor']}>
      <h4 className={styles['variables-editor__title']}>
        {content.VariablesEditorTitle}
      </h4>
      <CodeEditor
        textareaCode={variablesCode}
        setTextareaCode={setVariablesCode}
        lineNumbers={variablesLineNumbers}
        setLineNumbers={setVariablesLineNumbers}
        classNameCodeEditor={styles['variables-editor__code-editor']}
      />
    </div>
  );
};

export default VariablesEditor;
