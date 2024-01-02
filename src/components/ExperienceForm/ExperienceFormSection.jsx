export default function ExperienceFormSection({
  experienceInfo,
  handleChange,
  toogleEditMode,
  removeExperienceInfo,
}) {
  //test

  return (
    <form className="form-section-container">
      <div className="form-field">
        <label className="field-label" htmlFor="Company">
          Company Name
        </label>
        <input
          className="field-input"
          id="company"
          name="company"
          value={experienceInfo.company}
          onChange={handleChange}
          placeholder="Twitter"
        />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="position">
          Position
        </label>
        <input
          className="field-input"
          id="position"
          name="position"
          value={experienceInfo.position}
          onChange={handleChange}
          placeholder="FrontEnd developer"
        />
      </div>

      <div className="double-field-container">
        <div className="form-field">
          <label className="field-label" htmlFor="experience-start">
            Start
          </label>
          <input
            className="field-input"
            id="experience-start"
            name="start"
            value={experienceInfo.start}
            onChange={handleChange}
            placeholder="01.2020"
          />
        </div>
        <div className="form-field">
          <label className="field-label" htmlFor="experience-end">
            End
          </label>
          <input
            className="field-input"
            id="experience-end"
            name="end"
            value={experienceInfo.end}
            onChange={handleChange}
            placeholder="10.2023"
          />
        </div>
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="description">
          Description
        </label>
        <textarea
          className=" textarea-input field-input"
          id="description"
          name="description"
          value={experienceInfo.description}
          onChange={handleChange}
          placeholder="Write more about the experience"
        />
      </div>

      <div className="form-button-container">
        <button
          onClick={removeExperienceInfo}
          className="form-button delete-button"
        >
          Delete
        </button>

        <button onClick={toogleEditMode} className="form-button">
          Save
        </button>
      </div>
    </form>
  );
}
