import IContentSignIn from '@/model/jsons/contentSignIn';
import IContentSignUp from '@/model/jsons/contentSignUp';
import IContentWelcome from '@/model/jsons/contentWelcome';
import IContentValidationErrors from '@/model/jsons/contentValidationErrors';
import IContentErrorMessage from '@/model/jsons/contentErrorMessage';
import IContentNotFound from '@/model/jsons/contentNotFound';

interface ILanguageState {
  eng: boolean;
  contentHeader: Record<string, string>;
  contentGraphiQl: Record<string, string>;
  contentSignIn: IContentSignIn;
  contentSignUp: IContentSignUp;
  contentWelcome: IContentWelcome;
  contentValidationErrors: IContentValidationErrors;
  contentErrorMassage: IContentErrorMessage;
  contentNotFound: IContentNotFound;
}

export default ILanguageState;
