import phoneIcon from "../../assets/icons/Nowy folder/phone-call.png";
import emailIcon from "../../assets/icons/Nowy folder/email.png";
import adressIcon from "../../assets/icons/Nowy folder/pin.png";

export default function CvContacts({ personalInfo }) {
  const { email, phoneNumber, adress } = personalInfo;

  return (
    <div className="cv-contacts-container">
      <h3 className="cv-side-header">Contact </h3>
      <div className="cv-contact">
        <img className="cv-contact-icon" src={phoneIcon} />
        {phoneNumber}
      </div>
      <div className="cv-contact">
        <img className="cv-contact-icon" src={emailIcon} />
        {email}
      </div>
      <div className="cv-contact">
        <img className="cv-contact-icon" src={adressIcon} />
        {adress}
      </div>
    </div>
  );
}
