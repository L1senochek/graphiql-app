export interface IDocsType {
  __schema: {
    types: ISchemaType[];
  };
}

export interface ISchemaField {
  name: string;
  type: {
    name: string;
    kind: string;
    ofType?: {
      name: string;
      kind: string;
    };
  };
}

export interface ISchemaType {
  name: string;
  fields?: ISchemaField[];
  description?: string;
  kind: string;
}
