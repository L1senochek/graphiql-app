import { InputHTMLAttributes } from 'react';

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  registerInput: string;
  registerValidation?: object;
  classNameWrapper?: string;
  classNameLabel?: string;
  titleLabel?: string;
}

export default IInputForm;
