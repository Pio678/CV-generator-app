import deleteIcon from "../../assets/icons/trash.png";
import editIcon from "../../assets/icons/edit.png";

export default function ExperienceList({
  experienceInfoArr,
  toogleEditMode,
  addNewExperience,
  removeExperienceInfo,
}) {
  const experienceListContent = experienceInfoArr.map((experienceInfo) => {
    return (
      <ExperienceListItem
        key={experienceInfo.id}
        experienceInfo={experienceInfo}
        toogleEditMode={() => toogleEditMode(experienceInfo.id)}
        handleDelete={() => {
          removeExperienceInfo(experienceInfo.id);
        }}
      />
    );
  });

  return (
    <>
      {experienceListContent}

      <button onClick={addNewExperience} className="add-button">
        + Add New
      </button>
    </>
  );
}

function ExperienceListItem({ experienceInfo, toogleEditMode, handleDelete }) {
  return (
    <div className="form-item">
      <p className="form-item-title">{experienceInfo.company}</p>
      <div className="list-item-buttons-container">
        <img
          onClick={toogleEditMode}
          className="list-item-button"
          src={editIcon}
        />
        <img
          onClick={handleDelete}
          className="list-item-button"
          src={deleteIcon}
        />
      </div>
    </div>
  );
}
