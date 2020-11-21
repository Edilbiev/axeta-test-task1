import React, { useState } from "react";
import TextField from "./TextField";
import Skills from "./Skills";
import SkillInput from "./SkillInput";

function UserInfo() {
  const [name, setName] = useState("John Smith");
  const onNameChange = (e) => setName(e.target.value);

  const [location, setLocation] = useState("Portland, Oregon, USA");
  const onLocationChange = (e) => setLocation(e.target.value);

  const [language, setLanguage] = useState("English");
  const onLanguageChange = (e) => setLanguage(e.target.value);

  const [skillLevel, setSkillLevel] = useState("strong");
  const onSelectChange = (e) => setSkillLevel(e.target.value);

  const [skills, setSkills] = useState([
    { id: 1, name: "PHP", level: "strong" },
    { id: 2, name: "RUBY", level: "strong" },
    { id: 3, name: "JAVASCRIPT", level: "medium" },
    { id: 4, name: "ACTIONSCRIPT", level: "light" },
  ]);
  const [skillInputValue, setSkillInputValue] = useState("");
  const onInputValueChange = (e) => setSkillInputValue(e.target.value);

  const [skillInputStringShowed, setSkillInputStringShowed] = useState(false);
  const handleShowSkillInputString = () =>
    setSkillInputStringShowed(!skillInputStringShowed);

  const addNewSkill = () => {
    if (skillInputValue !== "") {
      setSkills([
        ...skills,
        {
          id: Date.now(),
          name: skillInputValue.toUpperCase(),
          level: skillLevel,
        },
      ]);
    }
    setSkillInputValue("");
    handleShowSkillInputString();
  };

  const deleteSkill = (id) =>
    setSkills(skills.filter((skill) => id !== skill.id));

  return (
    <div className="user-info">
      <div className="user-info-inner">
        <TextField size="large" value={name} onChange={onNameChange} />
        <TextField size="small" value={location} onChange={onLocationChange} />
        <TextField size="small" value={language} onChange={onLanguageChange} />
        <Skills skills={skills} deleteSkill={deleteSkill} />
        <SkillInput
          skillInputValue={skillInputValue}
          onInputValueChange={onInputValueChange}
          addNewSkill={addNewSkill}
          isShowed={skillInputStringShowed}
          showInput={handleShowSkillInputString}
          skillLevel={skillLevel}
          onSelectChange={onSelectChange}
        />
      </div>
    </div>
  );
}

export default UserInfo;
