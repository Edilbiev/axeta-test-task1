import icon from "../assets/confirmGrey.svg";

function SkillInput({
  skillInputValue,
  onInputValueChange,
  addNewSkill,
  isShowed,
  showInput,
  skillLevel,
  onSelectChange,
}) {
  if (!isShowed) {
    return <button onClick={showInput}>Add skills</button>;
  }

  return (
    <div className="skill-input">
      <input
        placeholder="Add skills"
        value={skillInputValue}
        onChange={onInputValueChange}
      />
      <div>
        <select value={skillLevel} onChange={onSelectChange}>
          <option value="strong">Strong</option>
          <option value="medium">Medium</option>
          <option value="light">Light</option>
        </select>
        <button onClick={addNewSkill}>
          <img src={icon} alt="icon"/>
        </button>
      </div>
    </div>
  );
}

export default SkillInput;
