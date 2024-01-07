import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import IInputForm from '@/model/components/InputForm/InputForm';
import IContentSignIn from '@/model/jsons/contentSignIn';
import IContentSignUp from '@/model/jsons/contentSignUp';

interface IAuthFormProps {
  hintLink: string;
  methods: UseFormReturn<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  content: IContentSignIn | IContentSignUp;
  formFields: IInputForm[];
}

export default IAuthFormProps;
