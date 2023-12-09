import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export default IBtn;
