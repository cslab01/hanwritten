"use client";
import React, { useState } from "react";
import { WORK_EXPERIENCE_TABLE } from "../../../public/static/static_data";
import Table from "./Table";
type Props = {};

export default function FilterableTable({}: Props) {
  const [filterText, setFilterText] = useState("");
  const filterTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilterText(e.target.value);
  return (
    <div>
      <div className="flex justify-end">
        <input
          type="search"
          placeholder="Search"
          value={filterText}
          onChange={filterTextChangeHandler}
        />
      </div>
      <Table tableProp={WORK_EXPERIENCE_TABLE} filterText={filterText} />
    </div>
  );
}
