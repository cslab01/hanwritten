import FilterableSkillList from "./(components)/FilterableSkillList";
import FilterableTable from "./(components)/FilterableTable";

export default function Home() {
  return (
    <div className="flex-col justify-content-center">
      <section className="py-5">
        <h1>Portfolio</h1>
        <p>Self-introduction</p>
      </section>

      <section className="py-5">
        <h1 className="pb-5">Skill</h1>
        <FilterableSkillList />
      </section>

      <section className="py-5">
        <h1>Work Experience</h1>
        <FilterableTable />
      </section>
    </div>
  );
}
