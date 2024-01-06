import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm/EducationForm";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";
import Header from "./components/Header";

import "./styles/normalize.css";
import "./styles/App.css";
import CV from "./components/CV/CV";
import SkillsForm from "./components/SkillsForm/SkillsForm";

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
    educationInfoArr.length > 0 ? educationInfoArr[0].id : null
  );

  const [experienceInfoArr, setExperienceInfoArr] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      start: "",
      end: "",
      description: "",
    },
  ]);

  //stores id of experience curently edited
  const [openExperienceId, setOpenExperienceId] = useState(
    experienceInfoArr.length > 0 ? experienceInfoArr[0].id : null
  );

  const [skillsArr, setSkillsArr] = useState([
    { id: crypto.randomUUID(), skill: "" },
  ]);

  const [openSkillId, setOpenSkillId] = useState(
    skillsArr.length > 0 ? skillsArr[0].id : null
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

  function handleExperienceInfoChange(e) {
    const { name, value } = e.target;

    let editedExperienceInfo = experienceInfoArr.find((experienceInfo) => {
      return experienceInfo.id === openExperienceId;
    });

    editedExperienceInfo = { ...editedExperienceInfo, [name]: value };

    let newExperienceInfoArr = experienceInfoArr.filter((experienceInfo) => {
      return experienceInfo.id != openExperienceId;
    });

    console.log(experienceInfoArr);
    setExperienceInfoArr([...newExperienceInfoArr, editedExperienceInfo]);
  }

  function handleSkillChange(e) {
    const { name, value } = e.target;

    let editedSkill = skillsArr.find((skill) => skill.id === openSkillId);

    editedSkill = { ...editedSkill, [name]: value };

    let newSkillArr = skillsArr.filter((skill) => {
      return skill.id != openSkillId;
    });

    setSkillsArr([...newSkillArr, editedSkill]);
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

  function removeExperienceInfo(id) {
    setExperienceInfoArr((prevExperienceInfoArr) => {
      const newExperienceInfoArr = prevExperienceInfoArr.filter(
        (experienceInfo) => {
          return experienceInfo.id != id;
        }
      );

      return newExperienceInfoArr;
    });

    setOpenExperienceId(null);
  }

  function removeSkill(id) {
    let newSkillArr = skillsArr.filter((skill) => {
      return skill.id != id;
    });

    setSkillsArr(newSkillArr);
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

  function addNewExperience() {
    const newExperienceInfo = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      start: "",
      end: "",
      description: "",
    };

    setExperienceInfoArr((prevExperienceInfoArr) => {
      return [...prevExperienceInfoArr, newExperienceInfo];
    });

    setOpenExperienceId(newExperienceInfo.id);
  }

  function addNewSkill() {
    const newSkill = { id: crypto.randomUUID(), skill: "" };

    setSkillsArr((prevSkillsArr) => {
      return [...prevSkillsArr, newSkill];
    });

    toogleSkillEditMode(newSkill.id);
  }

  function toogleExperienceEditMode(id) {
    openExperienceId === null
      ? setOpenExperienceId(id)
      : setOpenExperienceId(null);
  }

  function toogleEducationEditMode(id) {
    openEducationId === null
      ? setOpenEducationId(id)
      : setOpenEducationId(null);
  }
  function toogleSkillEditMode(id) {
    openSkillId === null ? setOpenSkillId(id) : setOpenSkillId(null);
  }

  function loadExample(personalInfo, educationInfo, experienceInfo, skills) {
    setPersonalInfo(personalInfo);

    setEducationInfoArr(educationInfo);
    setOpenEducationId(null);

    setExperienceInfoArr(experienceInfo);
    setOpenExperienceId(null);

    setSkillsArr(skills);
    setOpenSkillId(null);
  }

  return (
    <>
      <aside className="aside-container">
        <Header personalInfo={personalInfo} loadExample={loadExample} />

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
        <ExperienceForm
          experienceInfoArr={experienceInfoArr}
          openExperienceId={openExperienceId}
          handleExperienceInfoChange={handleExperienceInfoChange}
          toogleExperienceEditMode={toogleExperienceEditMode}
          addNewExperience={addNewExperience}
          removeExperienceInfo={removeExperienceInfo}
        />
        <SkillsForm
          skillsArr={skillsArr}
          openSkillId={openSkillId}
          addNewSkill={addNewSkill}
          handleSkillChange={handleSkillChange}
          toogleSkillEditMode={toogleSkillEditMode}
          removeSkill={removeSkill}
        />
      </aside>
      <main>
        <CV
          personalInfo={personalInfo}
          skillsArr={skillsArr}
          educationInfoArr={educationInfoArr}
          experienceInfoArr={experienceInfoArr}
        />
      </main>
    </>
  );
}

export default App;
