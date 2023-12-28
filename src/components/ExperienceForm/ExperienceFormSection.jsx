export default function ExperienceFormSection() {
  return (
    <form className="form-section-container">
      <div className="field">
        <label htmlFor="Company">Company Name</label>
        <input id="company" placeholder="company-name"></input>
      </div>

      <div className="field">
        <label htmlFor="position">Position</label>
        <input id="position" placeholder="position"></input>
      </div>

      <div className="double-field-container">
        <div className="field">
          <label htmlFor="experience-start">Start</label>
          <input id="experience-start" placeholder="starting date"></input>
        </div>
        <div className="field">
          <label htmlFor="experience-end">End</label>
          <input id="experience-end" placeholder="ending date"></input>
        </div>
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="description of the work you did"
        />
      </div>
    </form>
  );
}
