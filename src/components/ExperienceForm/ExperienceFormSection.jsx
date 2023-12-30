export default function ExperienceFormSection() {
  return (
    <form className="form-section-container">
      <div className="form-field">
        <label className="field-label" htmlFor="Company">
          Company Name
        </label>
        <input className="field-input" id="company" placeholder="Twitter" />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="position">
          Position
        </label>
        <input
          className="field-input"
          id="position"
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
          placeholder="Write more about the experience"
        />
      </div>
    </form>
  );
}
