export default function CvSkills({ skills }) {
  const skillsContent = skills.map((skill) => {
    return <li key={skill.id}>&#8226; {skill.skill}</li>;
  });

  return (
    <div className="cv-skills-container">
      <h4 className="cv-side-header cv-skills-header">Skills </h4>
      <ul className="cv-skill-list">{skillsContent}</ul>
    </div>
  );
}
