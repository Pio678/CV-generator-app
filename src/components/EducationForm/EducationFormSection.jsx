export default function EducationFormSection() {
  return (
    <form className="form-section-container">
      <div className="field">
        <label htmlFor="school-name">School</label>
        <input id="school-name" placeholder="School Name"></input>
      </div>

      <div className="field">
        <label htmlFor="school-location">Location</label>
        <input
          id="school-location"
          placeholder="location of the school"
        ></input>
      </div>

      <div className="field">
        <label htmlFor="degree-name">Degree</label>
        <input id="degree-name" placeholder="Degree Name"></input>
      </div>

      <div className="double-field-container">
        <div className="field">
          <label htmlFor="education-start">started</label>
          <input id="education-start" placeholder=""></input>
        </div>

        <div className="field">
          <label htmlFor="education-end">graduated</label>
          <input id="education-end" placeholder=""></input>
        </div>
      </div>
    </form>
  );
}
