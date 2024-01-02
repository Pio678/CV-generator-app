import { Canvas } from "@react-pdf/renderer";
import "../../styles/CV.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CV({ personalInfo }) {
  const { firstName, lastName, position, email, phoneNumber, adress, summary } =
    personalInfo;

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
    <>
      <button className="export-button" onClick={() => exportCV()}>
        export CV
      </button>

      <div id="CV">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>
          <p className="position">{position}</p>
          {email}
          {phoneNumber}
        </p>
      </div>
    </>
  );
}
