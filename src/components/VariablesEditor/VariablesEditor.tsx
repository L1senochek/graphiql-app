import styles from './variables-editor.module.scss';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import {
  setVariablesCode,
  setVariablesLineNumbers,
} from '@/store/slices/queryEditorSlice';

const VariablesEditor: React.FC = (): JSX.Element => {
  const variablesCode = useAppSelector(
    (state: RootState) => state.queryEditorSlice.variablesCode
  );
  const variablesLineNumbers = useAppSelector(
    (state: RootState) => state.queryEditorSlice.variablesLineNumbers
  );

  return (
    <div className={styles['variables-editor']}>
      <h4 className={styles['variables-editor__title']}>VariablesEditor</h4>
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
