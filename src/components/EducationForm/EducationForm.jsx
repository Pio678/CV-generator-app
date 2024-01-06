import EducationFormSection from "./EducationFormSection";
import "../../styles/form.css";
import EducationList from "./EducationList";

import educationIcon from "../../assets/icons/education.png";

function EducationForm({
  educationInfoArr,
  openEducationId,
  addEducationSection,
  toogleEditMode,
  handleEducationInfoChange,
  removeEducationInfo,
}) {
  let educationContent;

  if (openEducationId === null) {
    educationContent = (
      <EducationList
        educationInfoArr={educationInfoArr}
        addEducationSection={addEducationSection}
        toogleEditMode={toogleEditMode}
        removeEducationInfo={removeEducationInfo}
      />
    );
  } else {
    const OpenEducationInfo = educationInfoArr.find((educationInfo) => {
      return educationInfo.id === openEducationId;
    });

    educationContent = (
      <EducationFormSection
        educationInfo={OpenEducationInfo}
        handleChange={handleEducationInfoChange}
        toogleEditMode={() => {
          toogleEditMode(openEducationId);
        }}
        handleRemove={() => removeEducationInfo(OpenEducationInfo.id)}
      />
    );
  }

  return (
    <form className="form-container">
      <div className="form-header-container">
        <img className="form-section-icon" src={educationIcon} />
        <h3 className="form-header">Education</h3>
      </div>

      {educationContent}
    </form>
  );
}

export default EducationForm;
