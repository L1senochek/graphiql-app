import IContentField from '@/model/jsons/contentField';

interface IContentSignIn {
  title: string;
  hint: string;
  hintLink: string;
  inputEmail: IContentField;
  inputPassword: IContentField;
  buttonName: string;
}

export default IContentSignIn;
