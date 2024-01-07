import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  selectRequestCode,
  setRequestCode,
  setRequestLineNumbers,
} from '@/store/slices/queryEditorSlice/queryEditorSlice';

const usePrettifyCode = () => {
  const dispatch = useDispatch();
  const requestCode = useSelector(selectRequestCode);
  const [isCodePrettified, setIsCodePrettified] = useState(false);

  useEffect(() => {
    setIsCodePrettified(false);
  }, [requestCode]);

  const prettifyCode = () => {
    if (isCodePrettified) return;

    const cleanedCode = requestCode.replace(/\s*\n\s*/g, ' ');

    let indentLevel = 0;
    let formattedCode = '';
    let isNewLine = true;

    Array.from(cleanedCode).forEach((char, index, array) => {
      if (char === '{') {
        if (!isNewLine) formattedCode += '\n';
        formattedCode += ' '.repeat(indentLevel * 2) + char + '\n';
        indentLevel++;
        isNewLine = true;
      } else if (char === '}') {
        indentLevel = Math.max(indentLevel - 1, 0);
        if (!isNewLine) formattedCode += '\n';
        formattedCode += ' '.repeat(indentLevel * 2) + char;
        isNewLine = false;
        if (
          index + 1 < array.length &&
          array[index + 1] !== '}' &&
          array[index + 1] !== ';'
        ) {
          formattedCode += '\n';
          isNewLine = true;
        }
      } else if (char === ' ' && isNewLine) {
      } else {
        if (isNewLine) {
          formattedCode += ' '.repeat(indentLevel * 2);
          isNewLine = false;
        }
        formattedCode += char;
      }
    });
    const newFormattedCode = formattedCode.trimEnd();
    if (newFormattedCode !== requestCode) {
      dispatch(setRequestCode(newFormattedCode));

      const lineNumbers = newFormattedCode
        .split('\n')
        .map((_, index) => index + 1)
        .concat(
          newFormattedCode ? [newFormattedCode.split('\n').length + 1] : [1]
        );
      dispatch(setRequestLineNumbers(lineNumbers));

      setIsCodePrettified(true);
    }
  };

  return prettifyCode;
};

export default usePrettifyCode;
