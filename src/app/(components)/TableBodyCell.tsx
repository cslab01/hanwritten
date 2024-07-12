import React from "react";
import { TableBodyCell as TableBodyCellType, Formatter } from "../types";

export default function TableBodyCell({
  propData,
  formatter,
}: {
  propData: TableBodyCellType;
  formatter: Array<Formatter | null>;
}) {
  const providedFormatter = formatter[propData.code - 1];
  const cellValue = providedFormatter ? providedFormatter(propData.data) : propData.data
  return (
    <td className="border-solid border-2">
      {cellValue}
    </td>
  );
}
