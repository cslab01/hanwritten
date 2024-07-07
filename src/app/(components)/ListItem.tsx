import React from "react";
import Image from "next/image";
import { ListItem as ListItemType } from "../types";

export default function ListItem({ data }: { data: ListItemType }) {
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
}
