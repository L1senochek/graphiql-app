import { InputHTMLAttributes } from 'react';

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  registerInput: string;
  classNameWrapper?: string;
  classNameLabel?: string;
  titleLabel?: string;
}

export default IInputForm;
