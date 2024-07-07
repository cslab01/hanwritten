import React from "react";
import { TableHeadCell as TableHeadCellType } from "../types";

export default function TableHeadCell({
  propData,
}: {
  propData: TableHeadCellType;
}) {
  return (
    <th scope={propData.scope} className="border-solid border-2">
      {propData.data}
    </th>
  );
}
