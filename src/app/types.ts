export interface Button {
  label: string;
  clickHandler?: (event:React.MouseEvent) => {}
}

export interface List {
  code: Number;
  label: string;
  items: ListItem[];
}

export interface ListItem {
  icon: string;
  label: string;
}

export interface Project {
  name: string;
  period: Date;
  techStack: Array<string>;
  position: string;
}

export interface TableHeadCell {
  scope: "col" | "row";
  code: number;
  data: string;
}
export interface TableBodyCell {
  code: number;
  data: string | Array<any>;
}
export type Formatter = (param: any) => string;
export interface TableBodyRow extends Array<TableBodyCell> {}
export interface Table {
  formatter: Array<Formatter | null>;
  header: Array<TableHeadCell>;
  body: Array<TableBodyRow>;
}
