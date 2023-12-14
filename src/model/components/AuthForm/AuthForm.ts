import { FieldValues, SubmitHandler } from 'react-hook-form';
import IInputForm from '@/model/components/InputForm/InputForm';
import IContentField from './ContentField';

interface IAuthFormProps<T extends FieldValues> {
  hintLink: string;
  onSubmit: SubmitHandler<T>;
  content: {
    title: string;
    hint: string;
    hintLink: string;
    buttonName: string;
    [key: string]: IContentField | string;
  };
  formFields: IInputForm[];
}

export default IAuthFormProps;
