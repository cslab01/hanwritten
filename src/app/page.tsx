import {
  NAV_BTN,
  WORK_EXPERIENCE_TABLE,
} from "./static_data";
import Table from "./(components)/Table";
import Button from "./(components)/Button";
import FilterableSkillList from "./(components)/FilterableSkillList";

const navBtns = NAV_BTN.map((btn) => <Button key={btn.label} data={btn} />);


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
          <FilterableSkillList/>
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
