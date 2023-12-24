import IContentSignIn from '@/model/jsons/contentSignIn';
import IContentSignUp from '@/model/jsons/contentSignUp';
import IContentWelcome from '@/model/jsons/contentWelcome';
import IContentValidationErrors from '@/model/jsons/contentValidationErrors';

interface ILanguageState {
  eng: boolean;
  contentHeader: Record<string, string>;
  contentGraphiQl: Record<string, string>;
  contentSignIn: IContentSignIn;
  contentSignUp: IContentSignUp;
  contentWelcome: IContentWelcome;
  contentValidationErrors: IContentValidationErrors;
}

export default ILanguageState;
