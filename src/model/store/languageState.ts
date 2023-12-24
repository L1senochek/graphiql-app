import IContentSignIn from '@/model/jsons/contentSignIn';

interface ILanguageState {
  eng: boolean;
  contentHeader: Record<string, string>;
  contentGraphiQl: Record<string, string>;
  contentSignIn: IContentSignIn;
}

export default ILanguageState;
