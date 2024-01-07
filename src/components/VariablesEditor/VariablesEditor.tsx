import styles from './variables-editor.module.scss';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import { useAppSelector } from '@/store/hooks';
import { selectContentGraphiQl } from '@/store/slices/languageSlice/languageSlice';
import HeadersEditor from '@/components/HeadersEditor/HeadersEditor';
import {
  selectVariablesCode,
  selectVariablesLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
} from '@/store/slices/queryEditorSlice/queryEditorSlice';
import { useEffect, useState } from 'react';
import IconDoubleArrow from '@/components/IconDoubleArrow/IconDoubleArrow';
import Tabs from '@/model/components/VariablesEditor/VariablesEditor';

const VariablesEditor: React.FC = (): JSX.Element => {
  const variablesCode = useAppSelector(selectVariablesCode);
  const variablesLineNumbers = useAppSelector(selectVariablesLineNumbers);
  const content = useAppSelector(selectContentGraphiQl);

  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.HEADERS);
  const [, setActiveTabName] = useState<string>(content.HeadersTitle);
  const [activeWindow, setActiveWindow] = useState<boolean>(true);

  useEffect(() => {
    if (activeTab === Tabs.HEADERS) {
      setActiveTabName(content.HeadersTitle);
    } else if (activeTab === Tabs.VARIABLES_EDITOR) {
      setActiveTabName(content.VariablesEditorTitle);
    }
  }, [activeTab, content.HeadersTitle, content.VariablesEditorTitle]);

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
              activeTab === Tabs.HEADERS ? ` ${styles['active-tab']}` : ''
            }`}
            onClick={() => setActiveTab(Tabs.HEADERS)}
          >
            {content.HeadersTitle}
          </div>
          <div
            className={`${styles['variables-editor__tabs_item']}${
              activeTab === Tabs.VARIABLES_EDITOR
                ? ` ${styles['active-tab']}`
                : ''
            }`}
            onClick={() => setActiveTab(Tabs.VARIABLES_EDITOR)}
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
      {activeTab === Tabs.HEADERS && <HeadersEditor />}
      {activeTab === Tabs.VARIABLES_EDITOR && (
        <CodeEditor
          textareaCode={variablesCode}
          setTextareaCode={setVariablesCode}
          lineNumbers={variablesLineNumbers}
          setLineNumbers={setVariablesLineNumbers}
          classNameCodeEditor={styles['variables-editor__code-editor']}
        />
      )}
    </div>
  );
};

export default VariablesEditor;
