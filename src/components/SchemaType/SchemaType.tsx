import { useState } from 'react';
import { ISchemaType } from '@/model/components/DocumentationExplorer/DocumentationExplorer';
import SchemaField from '@/components/SchemaField/SchemaField';
import styles from './schema-type.module.scss';
import IconAngle from '@/components/IconAngle/IconAngle';

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
        <div
          className={`${styles['schema-type__name_wrapper']}${
            isExpanded ? ` ${styles['open']}` : ''
          }`}
        >
          <strong className={styles['schema-type__name_strong']}>
            {type.name}
          </strong>
          {type.fields || type.description ? (
            <IconAngle />
          ) : (
            <span className={styles['schema-type__name_kind']}>
              ({type.kind})
            </span>
          )}
        </div>
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
                  description:
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
