"use client"
import React from "react";
import { Button as ButtonType } from "../types";


export default function Button({ data }: { data: ButtonType }) {
  return (
    <button onClick={data.clickHandler} className="border-solid border-2 rounded-md px-2 py-1 mr-3">
      {data.label}
    </button>
  );
}
