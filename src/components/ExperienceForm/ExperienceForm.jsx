import ExperienceFormSection from "./ExperienceFormSection";
import experienceIcon from "../../assets/icons/experience.png";

import "../../styles/form.css";
import ExperienceList from "./ExperienceList";

export default function ExperienceForm({
  experienceInfoArr,
  openExperienceId,
  handleExperienceInfoChange,
  toogleExperienceEditMode,
  addNewExperience,
  removeExperienceInfo,
}) {
  let experienceContent;

  if (openExperienceId === null) {
    experienceContent = (
      <ExperienceList
        experienceInfoArr={experienceInfoArr}
        toogleEditMode={toogleExperienceEditMode}
        addNewExperience={addNewExperience}
        removeExperienceInfo={removeExperienceInfo}
      />
    );
  } else {
    const openExperienceInfo = experienceInfoArr.find((experienceInfo) => {
      return experienceInfo.id === openExperienceId;
    });

    experienceContent = (
      <ExperienceFormSection
        experienceInfo={openExperienceInfo}
        handleChange={handleExperienceInfoChange}
        toogleEditMode={() => toogleExperienceEditMode(openExperienceId)}
        removeExperienceInfo={() => removeExperienceInfo(openExperienceId)}
      />
    );
  }

  return (
    <form className="form-container">
      <div className="form-header-container">
        <img className="form-section-icon" src={experienceIcon} />
        <h3 className="form-header">Work Experience</h3>
      </div>

      {experienceContent}
    </form>
  );
}
