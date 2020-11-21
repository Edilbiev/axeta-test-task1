import React from "react";
import cancelIcon from "../assets/cancelRed.svg";

function Skill({ level, name, id, deleteSkill }) {
  const handleDelete = () => {
    deleteSkill(id);
  };

  return (
    <div className="skill-outer">
      <div className={`skill ${level}-skill`}>{name}</div>
      <button className="skill-delete-button" onClick={handleDelete}>
        <img src={cancelIcon} alt="cancel" />
      </button>
    </div>
  );
}

export default Skill;
