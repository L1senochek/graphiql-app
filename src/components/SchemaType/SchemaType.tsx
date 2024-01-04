import { useState } from 'react';
import { ISchemaType } from '@/model/components/DocumentationExplorer/DocumentationExplorer';
import SchemaField from '@/components/SchemaField/SchemaField';
import styles from './schema-type.module.scss';

const SchemaType: React.FC<{ type: ISchemaType }> = ({ type }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`${styles['schema-type']}${
        type.fields || type.description ? ` ${styles['full-field']}` : ''
      }`}
      key={type.name}
    >
      <div
        className={styles['schema-type__name']}
        onClick={type.fields || type.description ? handleToggle : undefined}
      >
        <strong className={styles['schema-type__name_strong']}>
          {type.name}
        </strong>
        <hr
          className={`${styles['schema-type__name_line']}${
            isExpanded ? ` ${styles['open']}` : ''
          }`}
        />
      </div>
      <div
        className={`${styles['schema-type__items']}${
          isExpanded ? ` ${styles['open']}` : ''
        }`}
      >
        {type.fields
          ? type.fields.map((field, index) => (
              <SchemaField key={index} name={field.name} type={field.type} />
            ))
          : type.description && (
              <div className={styles['schema-type__items_description']}>
                <strong
                  className={styles['schema-type__items_description_strong']}
                >
                  Description:
                </strong>
                <span>{type.description}</span>
              </div>
            )}
      </div>
      <hr className={styles['schema-type__separator']} />
    </div>
  );
};

export default SchemaType;
