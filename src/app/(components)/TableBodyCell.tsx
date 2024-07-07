import React from "react";
import { TableBodyCell as TableBodyCellType, Formatter } from "../types";

export default function TableBodyCell({
  propData,
  formatter
}: {
  propData: TableBodyCellType;
  formatter: Array<Formatter | null>
}) {
  const providedFormatter = formatter[propData.code - 1];
  return (
    <td className="border-solid border-2">
      {providedFormatter ? providedFormatter(propData.data) : propData.data}
    </td>
  );
}
