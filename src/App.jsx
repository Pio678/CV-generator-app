import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm/EducationForm";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";

import LogoIcon from "./assets/resume (2).png";

import "./styles/normalize.css";
import "./styles/App.css";

function App() {
  return (
    <>
      <aside className="aside-container">
        <header className="header-container">
          <h1 className="header">
            <img className="logo-icon" src={LogoIcon} />
            CV Generator
          </h1>
        </header>

        <PersonalInfoForm />
        <EducationForm />
        <ExperienceForm />
      </aside>
    </>
  );
}

export default App;
