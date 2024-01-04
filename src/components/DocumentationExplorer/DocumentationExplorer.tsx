import { useAppSelector } from '@/store/hooks';
import styles from './documentation-explorer.module.scss';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import {
  selectClickDocBtn,
  selectDocObj,
} from '@/store/slices/documentationSlice';
import {
  IDocsType,
  ISchemaType,
} from '@/model/components/DocumentationExplorer/DocumentationExplorer';
import SchemaType from '@/components/SchemaType/SchemaType';

const DocumentationExplorer: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(selectClickDocBtn);
  const content = useAppSelector(selectContentGraphiQl);
  const docs = useAppSelector(selectDocObj);

  const renderSchemaType = (type: ISchemaType) => (
    <SchemaType key={type.name} type={type} />
  );

  const renderSchemaTypes = (types: ISchemaType[]) =>
    types.map(renderSchemaType);

  return (
    <div
      className={`${styles['documentation-explorer']}${
        isClickDocBtn ? ` ${styles['open']}` : ''
      }`}
    >
      <h4 className={styles['documentation-explorer__title']}>
        {content.DocumentationExplorerTitle}
      </h4>
      {typeof docs === 'string' && (
        <div className={styles['documentation-explorer__docs']}>{docs}</div>
      )}
      {docs && typeof docs === 'object' && (
        <div className={styles['documentation-explorer__content']}>
          {renderSchemaTypes((docs as IDocsType).__schema?.types)}
        </div>
      )}
    </div>
  );
};

export default DocumentationExplorer;
