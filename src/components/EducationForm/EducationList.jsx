import deleteIcon from "../../assets/icons/trash_red.png";
import editIcon from "../../assets/icons/edit.png";

export default function EducationList({
  educationInfoArr,
  addEducationSection,
  toogleEditMode,
  removeEducationInfo,
}) {
  const educationListContent = educationInfoArr.map((educationInfo) => {
    return (
      <EducationListItem
        key={educationInfo.id}
        educationInfo={educationInfo}
        toogleEditMode={() => {
          toogleEditMode(educationInfo.id);
        }}
        handleDelete={() => removeEducationInfo(educationInfo.id)}
      />
    );
  });

  return (
    <>
      {educationListContent}

      <button onClick={addEducationSection} className="add-button">
        + Add New
      </button>
    </>
  );
}

function EducationListItem({ educationInfo, toogleEditMode, handleDelete }) {
  return (
    <div className="form-item">
      <h4 className="form-item-title">{educationInfo.school}</h4>
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
