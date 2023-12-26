import styles from './variables-editor.module.scss';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import { useAppSelector } from '@/store/hooks';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import HeadersEditor from '@/components/HeadersEditor/HeadersEditor';
import {
  selectVariablesCode,
  selectVariablesLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
} from '@/store/slices/queryEditorSlice';
import { useState } from 'react';
import IconDoubleArrow from '@/components/IconDoubleArrow/IconDoubleArrow';

const VariablesEditor: React.FC = (): JSX.Element => {
  const variablesCode = useAppSelector(selectVariablesCode);
  const variablesLineNumbers = useAppSelector(selectVariablesLineNumbers);
  const content = useAppSelector(selectContentGraphiQl);

  const [activeTab, setActiveTab] = useState(content.HeadersTitle);
  const [activeWindow, setActiveWindow] = useState(true);

  const handleTabClick = (tabName: string) => setActiveTab(tabName);

  return (
    <div
      className={`${styles['variables-editor']}${
        !activeWindow ? ` ${styles['active']}` : ''
      }`}
    >
      <div className={styles['variables-editor__tabs']}>
        <div className={styles['variables-editor__tabs_wrapper']}>
          <div
            className={`${styles['variables-editor__tabs_item']}${
              activeTab === content.HeadersTitle
                ? ` ${styles['active-tab']}`
                : ''
            }`}
            onClick={() => handleTabClick(content.HeadersTitle)}
          >
            {content.HeadersTitle}
          </div>
          <div
            className={`${styles['variables-editor__tabs_item']}${
              activeTab === content.VariablesEditorTitle
                ? ` ${styles['active-tab']}`
                : ''
            }`}
            onClick={() => handleTabClick(content.VariablesEditorTitle)}
          >
            {content.VariablesEditorTitle}
          </div>
          <div className={styles['variables-editor__tabs_line']}></div>
          <div
            className={`${styles['variables-editor__tabs_arrow-wrapper']}${
              !activeWindow ? ` ${styles['active']}` : ''
            }`}
            onClick={() => setActiveWindow(!activeWindow)}
          >
            <IconDoubleArrow />
          </div>
        </div>
      </div>
      {activeTab === content.VariablesEditorTitle && (
        <CodeEditor
          textareaCode={variablesCode}
          setTextareaCode={setVariablesCode}
          lineNumbers={variablesLineNumbers}
          setLineNumbers={setVariablesLineNumbers}
          classNameCodeEditor={styles['variables-editor__code-editor']}
        />
      )}
      {activeTab === content.HeadersTitle && <HeadersEditor />}
    </div>
  );
};

export default VariablesEditor;
