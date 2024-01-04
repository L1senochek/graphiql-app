import { useSelector, useDispatch } from 'react-redux';
import {
  selectRequestCode,
  setRequestCode,
  setRequestLineNumbers,
} from '@/store/slices/queryEditorSlice';

const usePrettifyCode = () => {
  const dispatch = useDispatch();
  const requestCode = useSelector(selectRequestCode);
  const prettifyCode = () => {
    const cleanedCode = requestCode.trim().replace(/\s*\n\s*/g, ' ');

    let indentLevel = 0;
    let formattedCode = '';
    let isNewLine = true;
    let lineCount = 1;

    Array.from(cleanedCode).forEach((char, index, array) => {
      if (char === '{') {
        if (!isNewLine) formattedCode += '\n';
        formattedCode += ' '.repeat(indentLevel * 2) + char + '\n';
        indentLevel++;
        isNewLine = true;
        lineCount++;
      } else if (char === '}') {
        indentLevel = Math.max(indentLevel - 1, 0);
        if (!isNewLine) formattedCode += '\n';
        formattedCode += ' '.repeat(indentLevel * 2) + char;
        isNewLine = false;
        if (!(array[index + 1] === '}' || array[index + 1] === ';')) {
          lineCount++;
        }
      } else {
        if (isNewLine) {
          formattedCode += ' '.repeat(indentLevel * 2);
          isNewLine = false;
        }
        formattedCode += char;
      }
    });
    dispatch(setRequestCode(formattedCode.trimEnd()));

    lineCount = formattedCode.split('\n').length + 1;

    const newLineNumbers = Array.from(
      { length: lineCount },
      (_, index) => index + 1
    );
    dispatch(setRequestLineNumbers(newLineNumbers));
  };

  return prettifyCode;
};

export default usePrettifyCode;
