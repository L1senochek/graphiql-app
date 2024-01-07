interface IQueryEditorState {
  requestCode: string;
  requestLineNumbers: number[];
  variablesCode: string;
  variablesLineNumbers: number[];
}

export default IQueryEditorState;
