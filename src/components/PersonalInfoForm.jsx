import "../styles/form.css";

function PersonalInfoForm() {
  return (
    <form className="form-container">
      <h3 className="form-header">Personal Information</h3>

      <div className="double-field-container">
        <div className="form-field">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name"></input>
        </div>

        <div className="form-field">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name"></input>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="position">Posotion</label>
        <input type="text" id="position" placeholder="Position"></input>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email"></input>
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Phone Number"></input>
      </div>

      <div class="form-field">
        <label htmlFor="Adress">Adress</label>
        <input type="text" id="adress" placeholder="City, Country"></input>
      </div>

      <div class="form-field">
        <label htmlFor="summary">summary</label>
        <textarea
          id="summary"
          placeholder="write something about yourself"
        ></textarea>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
