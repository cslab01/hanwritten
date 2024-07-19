import React from "react";
import BuildProject from "./(components)/BuildProject";
import { BUILD_PROJECT } from "../static_data";

export default function Build() {
  return BUILD_PROJECT.map((pj) => <BuildProject key={pj.title} prop={pj} />);
}
