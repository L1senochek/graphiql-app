import IContentSignIn from '@/model/jsons/contentSignIn';
import IContentSignUp from '@/model/jsons/contentSignUp';
import IContentWelcome from '@/model/jsons/contentWelcome';

interface ILanguageState {
  eng: boolean;
  contentHeader: Record<string, string>;
  contentGraphiQl: Record<string, string>;
  contentSignIn: IContentSignIn;
  contentSignUp: IContentSignUp;
  contentWelcome: IContentWelcome;
}

export default ILanguageState;
