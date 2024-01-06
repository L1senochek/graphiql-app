import IconRun from '@/components/IconRun/IconRun';
import Btn from '@/components/Btn/Btn';
import IconBroom from '@/components/IconBroom/IconBroom';
import styles from './request-editor.module.scss';
import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import usePrettifyCode from '@/utils/prettify/usePrettifyCode';
import getData from '@/utils/getData/getData';
import { selectServerAddressInputValue } from '@/store/slices/serverAddressSlice';
import { selectHeadersValue } from '@/store/slices/headersSlice';
import { selectRequestCode } from '@/store/slices/queryEditorSlice';
import { setRequest, setResponse } from '@/store/slices/requestResponseSlice';

const RequestEditor: React.FC = (): JSX.Element => {
  const content = useAppSelector(selectContentGraphiQl);
  const prettifyCode = usePrettifyCode();
  const endpoint = useAppSelector(selectServerAddressInputValue);
  const headersArr = useAppSelector(selectHeadersValue);
  const request = useAppSelector(selectRequestCode);
  const dispatch = useAppDispatch();

  const headersObj = headersArr.reduce((acc, { headerKey, value }) => {
    (acc as Record<string, string>)[headerKey] = value;
    return acc;
  }, {});

  const clickRun = async () => {
    const start = request.indexOf('{');
    const end = request.lastIndexOf('}') + 1;
    const queryString = request.substring(start, end);
    dispatch(setRequest(queryString));

    const res = await getData(endpoint, headersObj, queryString);
    dispatch(setResponse(res));
    console.log(res);
  };

  return (
    <div className={styles['request-editor']}>
      <div className={styles['request-editor__left-side']}>
        <h4 className={styles['request-editor__left-side_title']}>
          {content.RequestEditorTitle}
        </h4>
        <QueryEditorViewer />
      </div>
      <div className={styles['request-editor__right-side']}>
        <Btn
          className={styles['request-editor__right-side_btn']}
          title="run"
          onClick={clickRun}
        >
          <IconRun />
        </Btn>
        <Btn
          className={`${styles['request-editor__right-side_btn']} ${styles['icon-broom']}`}
          title="prettify"
          onClick={prettifyCode}
        >
          <IconBroom />
        </Btn>
      </div>
    </div>
  );
};

export default RequestEditor;
