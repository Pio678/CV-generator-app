import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm/EducationForm";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";

import LogoIcon from "./assets/resume (2).png";

import "./styles/normalize.css";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phoneNumber: "",
    adress: "",
    summary: "",
  });

  function handlePersonalInfoChange(e) {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;

    setPersonalInfo((prevPersonalInfo) => {
      return { ...prevPersonalInfo, [fieldName]: fieldValue };
    });
  }

  return (
    <>
      <aside className="aside-container">
        <header className="header-container">
          <h1 className="header">
            <img className="logo-icon" src={LogoIcon} />
            CV Generator
          </h1>
        </header>

        <PersonalInfoForm
          personalInfo={personalInfo}
          handleChange={handlePersonalInfoChange}
        />
        <EducationForm />
        <ExperienceForm />
      </aside>
      <main>
        <p>{personalInfo.firstName + personalInfo.lastName}</p>
        <p>{personalInfo.position}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phoneNumber}</p>
        <p>{personalInfo.adress}</p>
        <p>{personalInfo.summary}</p>
      </main>
    </>
  );
}

export default App;
