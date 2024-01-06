export default function CvExperience({ experienceInfoArr }) {
  const experienceContent = experienceInfoArr.map((experienceInfo) => {
    return (
      <div key={experienceInfo.id} className="cv-experience-entry-container">
        <p className="cv-experience-time">
          {experienceInfo.start} - {experienceInfo.end}
        </p>
        <p className="cv-experience-company">{experienceInfo.company}</p>
        <p className="cv-experience-position">{experienceInfo.position}</p>
        <p className="cv-experience-description">
          {experienceInfo.description}
        </p>
      </div>
    );
  });

  return (
    <div className="cv-experience-container">
      <h3 className="experience-header">Experience</h3>
      {experienceContent}
    </div>
  );
}
