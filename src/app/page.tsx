import {
  NAV_BTN,
  SKILL_BTN,
  SKILL_LIST,
  WORK_EXPERIENCE_TABLE,
} from "./static_data";
import Table from "./(components)/Table";
import Button from "./(components)/Button";
import ListItem from "./(components)/ListItem";

const navBtns = NAV_BTN.map((btn) => <Button key={btn.label} data={btn} />);
const skillBtns = SKILL_BTN.map((btn) => <Button key={btn.label} data={btn} />);
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

export default function Home() {
  return (
    <div className="flex-col justify-content-center">
      <header className="flex justify-center">{navBtns}</header>
      <main>
        <section className="py-5">
          <h1>Portfolio</h1>
          <p>Self-introduction</p>
        </section>

        <section className="py-5">
          <h1 className="pb-5">Skill</h1>
          <div className="flex pb-5">{skillBtns}</div>
          <div className="flex">{skills(2)}</div>
        </section>

        <section className="py-5">
          <h1>Work Experience</h1>
          <div className="flex justify-end">
            <input type="search" placeholder="Search" />
          </div>
          <Table tableProp={WORK_EXPERIENCE_TABLE} />
        </section>
      </main>
    </div>
  );
}
