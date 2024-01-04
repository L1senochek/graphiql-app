import { ISchemaField } from '@/model/components/DocumentationExplorer/DocumentationExplorer';
import styles from './schema-field.module.scss';

const SchemaField: React.FC<ISchemaField> = ({ name, type }) => (
  <div className={styles['schema-field']}>
    <strong className={styles['schema-field__name']}>{name}: </strong>
    <span>
      {type.name}
      {!type.name && type.ofType
        ? `${type.ofType.name} (${type.ofType.kind})`
        : ` (${type.kind})`}
    </span>
  </div>
);

export default SchemaField;
