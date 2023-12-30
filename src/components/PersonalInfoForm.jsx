import "../styles/form.css";

function PersonalInfoForm({
  firstName,
  lastName,
  position,
  email,
  phoneNumber,
  adress,
  summary,
  handleChange,
}) {
  return (
    <form className="form-container">
      <h3 className="form-header">Personal Information</h3>

      <div className="double-field-container">
        <div className="form-field">
          <label className="field-label" htmlFor="first-name">
            First Name
          </label>

          <input
            className="field-input"
            id="first-name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="John"
          />
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="field-input"
            id="last-name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="position">
          Posotion
        </label>

        <input
          className="field-input"
          id="position"
          name="position"
          value={position}
          onChange={handleChange}
          placeholder="Front end developer"
        />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="email">
          Email
        </label>

        <input
          className="field-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="JohnSmith1580@gmail.com"
        />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="phone">
          Phone Number
        </label>

        <input
          className="field-input"
          type="tel"
          id="phone"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="123 467 890"
        />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="Adress">
          Adress
        </label>

        <input
          className="field-input"
          id="adress"
          name="adress"
          value={adress}
          onChange={handleChange}
          placeholder="London, UK"
        />
      </div>

      <div className="form-field">
        <label className="field-label" htmlFor="summary">
          summary
        </label>

        <textarea
          className="textarea-input field-input"
          id="summary"
          name="summary"
          value={summary}
          onChange={handleChange}
          placeholder="Write more about yourself."
        />
      </div>
    </form>
  );
}

export default PersonalInfoForm;
