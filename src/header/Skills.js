import Skill from "./Skill";

function Skills({ skills, deleteSkill }) {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          level={skill.level}
          id={skill.id}
          deleteSkill={deleteSkill}
          key={skill.id}
        />
      ))}
    </div>
  );
}

export default Skills;
