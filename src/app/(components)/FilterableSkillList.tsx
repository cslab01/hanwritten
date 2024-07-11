"use client";
import React from "react";
import { useState } from "react";
import { SKILL_BTN, SKILL_LIST } from "../static_data";
import { Button as ButtonType } from "../types";
import ListItem from "./ListItem";
import Button from "./Button";

export default function FilterableSkillList() {
  const [selectedBtn, setSelectedBtn] = useState<ButtonType["code"]>(1);
  const skillBtns = SKILL_BTN.map((btn) => (
    <Button
      key={btn.label}
      data={{ ...btn, clickHandler: (btnData) => setSelectedBtn(btnData.code) }}
    />
  ));
  const skills = (selectedCode: number) => {
    const selectedSkillList = SKILL_LIST.find(
      (skill) => skill.code === selectedCode
    );
    if (!selectedSkillList) {
      return;
    }
    return selectedSkillList.items.map((item) => (
      <ListItem key={item.label} data={item} />
    ));
  };
  return (
    <>
      <div className="flex pb-5">{skillBtns}</div>
      <div className="flex">{skills(selectedBtn)}</div>
    </>
  );
}
