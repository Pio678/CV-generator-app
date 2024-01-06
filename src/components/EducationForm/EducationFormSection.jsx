export default function EducationFormSection({
  educationInfo,
  handleChange,
  toogleEditMode,
  handleRemove,
}) {
  return (
    <form className="form-section-container">
      <div className="form-field">
        <label className="field-label" htmlFor="school-name">
          School
        </label>
        <input
          className="field-input"
          id="school-name"
          name="school"
          value={educationInfo.school}
          onChange={handleChange}
          placeholder="University of London"
        ></input>
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="school-location">
          Location
        </label>
        <input
          className="field-input"
          id="school-location"
          name="location"
          value={educationInfo.location}
          onChange={handleChange}
          placeholder="London, UK"
        />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="degree-name">
          Degree
        </label>
        <input
          className="field-input"
          id="degree-name"
          name="degree"
          value={educationInfo.degree}
          onChange={handleChange}
          placeholder="Computer Science"
        />
      </div>

      <div className="double-field-container">
        <div className="form-field">
          <label className="field-label" htmlFor="education-start">
            Started
          </label>

          <input
            className="field-input"
            id="education-start"
            name="start"
            value={educationInfo.start}
            onChange={handleChange}
            placeholder="10.2018"
          />
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="education-end">
            graduated
          </label>

          <input
            className="field-input"
            id="education-end"
            name="end"
            value={educationInfo.end}
            onChange={handleChange}
            placeholder="04.2022"
          />
        </div>
      </div>

      <div className="form-button-container">
        <button className="form-button delete-button" onClick={handleRemove}>
          Delete
        </button>

        <button className="form-button" onClick={toogleEditMode}>
          Save
        </button>
      </div>
    </form>
  );
}
