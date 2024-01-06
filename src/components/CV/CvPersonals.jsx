export default function CvPersonals({ personalInfo }) {
  const { firstName, lastName, position, email, phoneNumber, adress, summary } =
    personalInfo;

  return (
    <div className="cv-personal-info-container">
      <h2 className="cv-name">
        {firstName} {lastName}
      </h2>
      <p className="cv-position">{position}</p>
      <p className="cv-summary">{summary}</p>
    </div>
  );
}
