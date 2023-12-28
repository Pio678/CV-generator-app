import EducationFormSection from "./EducationFormSection";
import "../../styles/form.css";

function EducationForm() {
  return (
    <form className="form-container">
      <h3 className="form-header">Education</h3>
      <EducationFormSection />
    </form>
  );
}

export default EducationForm;
