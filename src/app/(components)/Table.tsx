import React from "react";
import {
  Table as TableType,
  TableHeadCell as TableHeadCellType,
} from "../types";
import TableHeadCell from "./TableHeadCell";
import TableBodyCell from "./TableBodyCell";

export default function Table({
  tableProp,
  filterText,
}: {
  tableProp: TableType;
  filterText: string;
}) {
  const tableHeadCells = tableProp.header.map((cell) => (
    <TableHeadCell key={cell.code} propData={cell} />
  ));
  const tableRows = tableProp.body
    .filter((row) => {
      if(!filterText){
        return true
      }
      const cellValues = row.map((cell) => {
        let value = cell.data;
        value =
          typeof value === "string"
            ? value.toLowerCase()
            : value.map((element) =>
                typeof element === "string" ? element.toLowerCase() : element.toString()
              );
        return value;
      });
      
      return cellValues.flat().find(value => value.includes(filterText.toLowerCase()));
    })
    .map((row, rowIndex) => {
      const tableBodyCells = row.map(({ code, data }, cellIndex) => {
        const cellKey = cellIndex + "_" + code;
        // header of each row
        if (cellIndex === 0 && typeof data === "string") {
          const propData: TableHeadCellType = { code, data, scope: "row" };
          return <TableHeadCell key={cellKey} propData={propData} />;
        }
        return (
          <TableBodyCell
            key={cellKey}
            propData={{ code, data }}
            formatter={tableProp.formatter}
          />
        );
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
}
