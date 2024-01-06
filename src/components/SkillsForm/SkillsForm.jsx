import deleteIcon from "../../assets/icons/trash.png";
import editIcon from "../../assets/icons/edit.png";

import skillsIcon from "../../assets/icons/skills.png";

export default function SkillsForm({
  skillsArr,
  openSkillId,
  addNewSkill,
  handleSkillChange,
  toogleSkillEditMode,
  removeSkill,
}) {
  let skillsContent;

  if (openSkillId === null) {
    skillsContent = (
      <SkillList
        skillsArr={skillsArr}
        addNewSkill={addNewSkill}
        toogleSkillEditMode={toogleSkillEditMode}
        removeSkill={removeSkill}
      />
    );
  } else {
    let openSkill = skillsArr.find((skill) => {
      return skill.id === openSkillId;
    });

    skillsContent = (
      <SkillForm
        skill={openSkill}
        handleSkillChange={handleSkillChange}
        onSave={() => {
          toogleSkillEditMode(openSkillId);
        }}
      />
    );
  }

  return (
    <div className="form-container">
      <div className="form-header-container">
        <img className="form-section-icon" src={skillsIcon} />
        <h3 className="form-header">Skills</h3>
      </div>

      {skillsContent}
    </div>
  );
}

function SkillList({
  skillsArr,
  addNewSkill,
  toogleSkillEditMode,
  removeSkill,
}) {
  let skillListContent = skillsArr.map((skill) => {
    return (
      <Skill
        key={skill.id}
        skill={skill}
        toogleSkillEditMode={() => {
          toogleSkillEditMode(skill.id);
        }}
        removeSkill={() => {
          removeSkill(skill.id);
        }}
      />
    );
  });

  return (
    <>
      {skillListContent}
      <button onClick={addNewSkill} className="add-button">
        + Add New
      </button>
    </>
  );
}

function Skill({ skill, toogleSkillEditMode, removeSkill }) {
  return (
    <div className="form-item">
      <p className="form-item-title">{skill.skill}</p>
      <div className="list-item-buttons-container">
        <img
          onClick={toogleSkillEditMode}
          className="list-item-button"
          src={editIcon}
        />
        <img
          onClick={removeSkill}
          className="list-item-button"
          src={deleteIcon}
        />
      </div>
    </div>
  );
}

function SkillForm({ skill, handleSkillChange, onSave }) {
  return (
    <form className=" skill-form">
      <input
        className="field-input"
        id="skill"
        name="skill"
        value={skill.skill}
        onChange={handleSkillChange}
        placeholder="HTML"
      />

      <div className="skill-button-container">
        <button onClick={onSave} className="skill-save-button">
          Save
        </button>
      </div>
    </form>
  );
}
