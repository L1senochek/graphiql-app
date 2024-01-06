import IconRun from '@/components/IconRun/IconRun';
import Btn from '@/components/Btn/Btn';
import IconBroom from '@/components/IconBroom/IconBroom';
import styles from './request-editor.module.scss';
import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import { useAppSelector } from '@/store/hooks';
import usePrettifyCode from '@/utils/prettify/usePrettifyCode';
import getData from '@/utils/getData/getData';
import { selectServerAddressInputValue } from '@/store/slices/serverAddressSlice';
import { selectHeadersValue } from '@/store/slices/headersSlice';

const RequestEditor: React.FC = (): JSX.Element => {
  const content = useAppSelector(selectContentGraphiQl);
  const prettifyCode = usePrettifyCode();
  const endpoint = useAppSelector(selectServerAddressInputValue);
  const headersArr = useAppSelector(selectHeadersValue);

  const headersObj = headersArr.reduce((acc, { headerKey, value }) => {
    (acc as Record<string, string>)[headerKey] = value;
    return acc;
  }, {});

  const query = `
  {
    characters(page: 2, filter: {name: "Morty"}) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
  `;

  //const query2 = '';

  const clickRun = async () => {
    const res = await getData(endpoint, headersObj, query);
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
