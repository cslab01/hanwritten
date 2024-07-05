import {
  NAV_BTN,
  SKILL_BTN,
  SKILL_LIST,
  WORK_EXPERIENCE_TABLE,
} from "./static_data";
import {
  Button,
  ListItem,
  Table as TableType,
  TableBodyCell as TableBodyCellType,
  TableHeadCell as TableHeadCellType,
} from "./types";

import Image from "next/image";
const NavBtn = ({ data }: { data: Button }) => {
  return (
    <button className="border-solid border-2 rounded-md px-2 py-1">
      {data.label}
    </button>
  );
};
const SkillBtn = ({ data }: { data: Button }) => {
  return (
    <div className="border-solid border-2 rounded-md px-2 py-1 mr-3">
      {data.label}
    </div>
  );
};
const navBtns = NAV_BTN.map((btn) => <NavBtn key={btn.label} data={btn} />);
const skillBtns = SKILL_BTN.map((btn) => (
  <SkillBtn key={btn.label} data={btn} />
));
const SkillItem = ({ data }: { data: ListItem }) => {
  let icon = null;
  if (data.icon) {
    icon = (
      <div className="pr-4">
        <Image src={data.icon} alt="React Icon" width={30} height={30} />
      </div>
    );
  }
  return (
    <div className="flex pr-8">
      {icon}
      <div>{data.label}</div>
    </div>
  );
};
const skills = (selectedCode: number) => {
  const selectedSkillList = SKILL_LIST.find(
    (skill) => skill.code === selectedCode
  );
  if (!selectedSkillList) {
    return;
  }
  return selectedSkillList.items.map((item) => (
    <SkillItem key={item.label} data={item} />
  ));
};

const TableHeadCell = ({ propData }: { propData: TableHeadCellType }) => {
  return (
    <th scope={propData.scope} className="border-solid border-2">
      {propData.data}
    </th>
  );
};
const TableBodyCell = ({ propData }: { propData: TableBodyCellType }) => {
  const formatter = WORK_EXPERIENCE_TABLE.formatter[propData.code - 1];
  return (
    <td className="border-solid border-2">
      {formatter ? formatter(propData.data) : propData.data}
    </td>
  );
};

const Table = ({ tableProp }: { tableProp: TableType }) => {
  const tableHeadCells = tableProp.header.map((cell) => (
    <TableHeadCell key={cell.code} propData={cell} />
  ));
  const tableRows = tableProp.body.map((row, rowIndex) => {
    const tableBodyCells = row.map(({ code, data }, cellIndex) => {
      const cellKey = cellIndex + "_" + code;
      // header of each row
      if (cellIndex === 0 && typeof data === "string") {
        const propData: TableHeadCellType = { code, data, scope: "row" };
        return <TableHeadCell key={cellKey} propData={propData} />;
      }
      return <TableBodyCell key={cellKey} propData={{ code, data }} />;
    });
    return (
      <tr key={rowIndex} className="border-solid border-2">
        {tableBodyCells}
      </tr>
    );
  });
  return (
    <table>
      <thead className="border-solid border-2">
        <tr>{tableHeadCells}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default function Home() {
  return (
    <div className="flex-col justify-content-center">
      <header className="flex justify-center">{navBtns}</header>
      <main>
        <section className="py-5">
          <h1>Portfolio</h1>
          <p>Self-introduction</p>
        </section>

        <section className="py-5">
          <h1 className="pb-5">Skill</h1>
          <div className="flex pb-5">{skillBtns}</div>
          <div className="flex">{skills(2)}</div>
        </section>

        <section className="py-5">
          <h1>Work Experience</h1>
          <div className="flex justify-end">
            <input type="search" placeholder="Search" />
          </div>
          <Table tableProp={WORK_EXPERIENCE_TABLE} />
        </section>
      </main>
    </div>
  );
}
