export default function CvEducation({ educationInfoArr }) {
  const educationContent = educationInfoArr.map((educationInfo) => {
    return (
      <div key={educationInfo.id} className="cv-education-entry-container">
        <p className="cv-education-time">
          {educationInfo.start} - {educationInfo.end}
        </p>
        <p className="cv-education-degree">{educationInfo.degree}</p>
        <div className="cv-school-info">
          <p className="cv-school-name">{educationInfo.school}</p>
          <p className="cv-school-location">{educationInfo.location}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="cv-education-container">
      <h3 className="education-header">Education</h3>
      {educationContent}
    </div>
  );
}
