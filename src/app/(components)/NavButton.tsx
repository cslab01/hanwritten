"use react";
import Link from "next/link";
import React from "react";
import { NavButton as NavButtonType } from "../types";

export default function NavButton({ prop }: { prop: NavButtonType }) {
  const { href, label } = prop;
  return (
    <Link
      href={href}
      className="border-solid border-2 rounded-md px-2 py-1 mr-3"
    >
      {label}
    </Link>
  );
}
