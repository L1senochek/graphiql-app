import IContentField from '@/model/jsons/contentField';

interface IContentSignUp {
  title: string;
  hint: string;
  hintLink: string;
  inputName: IContentField;
  inputEmail: IContentField;
  inputPassword: IContentField;
  inputConfirmPassword: IContentField;
  buttonName: string;
}

export default IContentSignUp;
