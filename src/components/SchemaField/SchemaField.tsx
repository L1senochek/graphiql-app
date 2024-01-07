import { ISchemaField } from '@/model/components/DocumentationExplorer/DocumentationExplorer';
import styles from './schema-field.module.scss';

const SchemaField: React.FC<ISchemaField> = ({ name, type }) => (
  <div className={styles['schema-field']}>
    <strong className={styles['schema-field__name']}>{name}: </strong>
    <span>
      <span>{type.name}</span>
      {!type.name && type.ofType ? (
        <>
          <span>{type.ofType.name}</span>
          <span className={styles['schema-field__kind']}>
            ({type.ofType.kind})
          </span>
        </>
      ) : (
        <span className={styles['schema-field__kind']}>({type.kind})</span>
      )}
    </span>
  </div>
);

export default SchemaField;
