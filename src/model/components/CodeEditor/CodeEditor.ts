interface ICodeEditorProps {
  textareaCode: string;
  setTextareaCode: React.Dispatch<React.SetStateAction<string>>;
  lineNumbers: number[];
  setLineNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  classNameCodeEditor?: string;
}

export default ICodeEditorProps;
