import { PayloadAction } from '@reduxjs/toolkit';

interface ICodeEditorProps {
  textareaCode: string;
  setTextareaCode: (value: string) => PayloadAction<string>;
  lineNumbers: number[];
  setLineNumbers: (value: number[]) => PayloadAction<number[]>;
  classNameCodeEditor?: string;
}

export default ICodeEditorProps;
