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

  const [educationInfoArr, setEducationInfoArr] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      location: "",
      degree: "",
      start: "",
      end: "",
    },
  ]);

  //stores the id of education section curently edited
  const [openEducationId, setOpenEducationId] = useState(
    educationInfoArr[0] ? educationInfoArr[0].id : null
  );

  function handlePersonalInfoChange(e) {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;

    setPersonalInfo((prevPersonalInfo) => {
      return { ...prevPersonalInfo, [fieldName]: fieldValue };
    });
  }

  function handleEducationInfoChange(e) {
    const { name, value } = e.target;

    let editedEducationInfo = educationInfoArr.find((educationInfo) => {
      return educationInfo.id === openEducationId;
    });

    editedEducationInfo = { ...editedEducationInfo, [name]: value };

    setEducationInfoArr((prevEducationInfo) => {
      // we delete the currently edited education info from array

      let newEducationInfo = prevEducationInfo.filter((educationInfo) => {
        return educationInfo.id != editedEducationInfo.id;
      });

      // we add the edited education info
      return [...newEducationInfo, editedEducationInfo];
    });
  }

  function removeEducationInfo(id) {
    setEducationInfoArr((prevEducationInfo) => {
      const newEducationInfo = prevEducationInfo.filter((educationInfo) => {
        return educationInfo.id != id;
      });

      return newEducationInfo;
    });

    setOpenEducationId(null);
  }

  function handleNewEducation() {
    const newEducationInfo = {
      id: crypto.randomUUID(),
      school: "",
      location: "",
      degree: "",
      start: "",
      end: "",
    };

    setEducationInfoArr((prevEducationinfo) => {
      return [...prevEducationinfo, newEducationInfo];
    });

    setOpenEducationId(newEducationInfo.id);
  }

  function toogleEducationEditMode(id) {
    openEducationId === null
      ? setOpenEducationId(id)
      : setOpenEducationId(null);
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
        <EducationForm
          educationInfoArr={educationInfoArr}
          openEducationId={openEducationId}
          addEducationSection={handleNewEducation}
          toogleEditMode={toogleEducationEditMode}
          handleEducationInfoChange={handleEducationInfoChange}
          removeEducationInfo={removeEducationInfo}
        />
        <ExperienceForm />
      </aside>
      <main>
        <p>{personalInfo.firstName + personalInfo.lastName}</p>
        <p>{personalInfo.position}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phoneNumber}</p>
        <p>{personalInfo.adress}</p>
        <p>{personalInfo.summary}</p>
        <p>{openEducationId}</p>
        typeof educationInfoArr: {typeof educationInfoArr}
      </main>
    </>
  );
}

export default App;
