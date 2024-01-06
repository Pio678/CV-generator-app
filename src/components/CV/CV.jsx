import { Canvas } from "@react-pdf/renderer";
import "../../styles/CV.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CvPersonals from "./CvPersonals";
import CvContacts from "./CvContacts";
import CvSkills from "./CvSkills";
import CvEducation from "./CvEducation";
import CvExperience from "./CvExperience";

export default function CV({
  personalInfo,
  skillsArr,
  educationInfoArr,
  experienceInfoArr,
}) {
  const { firstName, lastName, position, email, phoneNumber, adress, summary } =
    personalInfo;

  console.log(skillsArr);
  return (
    <div id="CV">
      <div className="side-background">
        {/* this div fixes bug with grid line showing on pdf  */}
      </div>
      <CvContacts personalInfo={personalInfo} />
      <CvPersonals personalInfo={personalInfo} />
      <CvSkills skills={skillsArr} />
      <div className="cv-main">
        <CvEducation educationInfoArr={educationInfoArr} />
        <CvExperience experienceInfoArr={experienceInfoArr} />
      </div>
    </div>
  );
}
