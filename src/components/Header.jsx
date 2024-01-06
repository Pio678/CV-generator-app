import LogoIcon from "../assets/resume.png";
import downloadPdfIcon from "../assets/icons/download-pdf.png";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  examplePersonalInfo,
  exampleEducationInfo,
  exampleExperienceInfo,
  exampleSkills,
} from "../assets/exampleCvData";

export default function Header({ personalInfo, loadExample }) {
  const { firstName, lastName } = personalInfo;

  function exportCV() {
    const input = document.getElementById("CV");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${firstName}_${lastName}_CV.pdf`);
    });
  }

  return (
    <header className="header-container">
      <h1 className="header">
        <img className="logo-icon" src={LogoIcon} />
        CV Generator
      </h1>

      <div className="header-button-container">
        <button
          className="header-button"
          onClick={() =>
            loadExample(
              examplePersonalInfo,
              exampleEducationInfo,
              exampleExperienceInfo,
              exampleSkills
            )
          }
        >
          <p className="header-button-text">Load Example</p>
        </button>

        <button className="header-button" onClick={() => exportCV()}>
          <img src={downloadPdfIcon} />
          <p className="header-button-text">Export CV</p>
        </button>
      </div>
    </header>
  );
}
