import { StaticImageData } from "next/image";

export interface NavButton {
  code: number;
  label: string;
  href: string
}
export interface Button {
  code: number;
  label: string;
  clickHandler?: (param:any) => void
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

export interface BuildProject {
  title: string;
  description: string;
  github: string;
  img: StaticImageData;
  imgAlt: string
}
