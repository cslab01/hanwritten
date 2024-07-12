import { NavButton, Button, List, Table } from "./types";
import { dateRangeFormatter, concatArrFormatter } from "./utils";
import AWSIcon from "../../public/aws.svg";
import JSIcon from "../../public/javascript.svg";
import ReactIcon from "../../public/react.svg";
import TSIcon from "../../public/typescript.svg";
import UI5Icon from "../../public/ui5.jpg";
import VueIcon from "../../public/vue.svg";
export const NAV_BTN: NavButton[] = [
  { label: "Home", code: 1, href: "/" },
  { label: "Build", code: 2, href: "/build" },
  { label: "Post", code: 3, href: "/post" },
];
export const SKILL_BTN: Button[] = [
  { label: "Language", code: 1 },
  { label: "Framework", code: 2 },
  { label: "Cloud", code: 3 },
  { label: "Spoken language", code: 4 },
];
export const SKILL_LIST: List[] = [
  {
    code: 1,
    label: "Language",
    items: [
      { icon: JSIcon, label: "JavaScript" },
      { icon: TSIcon, label: "TypeScript" },
      // { icon: "", label: "" },
    ],
  },
  {
    code: 2,
    label: "Framework",
    items: [
      { icon: VueIcon, label: "Vuejs" },
      { icon: ReactIcon, label: "React" },
      { icon: UI5Icon, label: "SAP UI5" },
    ],
  },
  {
    code: 3,
    label: "Cloud",
    items: [
      { icon: AWSIcon, label: "AWS" },
      // { icon: "", label: "" },
      // { icon: "", label: "" },
    ],
  },
  {
    code: 4,
    label: "Spoken Language",
    items: [
      { icon: "", label: "Japanese" },
      { icon: "", label: "English" },
      { icon: "", label: "Vietnamese" },
    ],
  },
];

export const WORK_EXPERIENCE_TABLE: Table = {
  formatter: [null, dateRangeFormatter, concatArrFormatter, null],
  header: [
    { scope: "col", data: "Project Name", code: 1 },
    { scope: "col", data: "Period", code: 2 },
    { scope: "col", data: "Featured tech stack", code: 3 },
    { scope: "col", data: "Position", code: 4 },
  ],
  body: [
    [
      { code: 1, data: "project 1" },
      { code: 2, data: [new Date("2021-08"), new Date("2021-12")] },
      { code: 3, data: ["React", "Redux"] },
      { code: 4, data: "web developer" },
    ],
    [
      { code: 1, data: "project 2" },
      { code: 2, data: [new Date("2021-08"), new Date("2021-12")] },
      { code: 3, data: ["React", "SAP UI5"] },
      { code: 4, data: "web developer" },
    ],
  ],
};
