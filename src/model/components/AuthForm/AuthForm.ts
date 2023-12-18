import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import IInputForm from '@/model/components/InputForm/InputForm';
import IContentField from './ContentField';

interface IAuthFormProps {
  hintLink: string;
  methods: UseFormReturn<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
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
