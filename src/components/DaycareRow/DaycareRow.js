import "./DaycareRow.scss";
import { Link, useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

function DaycareRow({
  id,
  name,
  address,
  city,  
  contactName,
  contactEmail,
  contactPhone,
  contactPosition,
  daycare_name,

  onDelete,
  onEdit,
}) {
  return (
    <div className="daycare-row">
      <div className="daycare-row__col daycare-row__col--name">
        <h4 className="daycare-row__cell-header">DAYCARE</h4>
        <Link className="daycare-row__link" to={`/${id}`}>
          {name}
          
        </Link>
      </div>
      <div className="daycare-row__col daycare-row__col--contact-name">
        <h4 className="daycare-row__cell-header">CONTACT NAME</h4>
        {contactName}
        <p>{contactPosition}</p>
        
       
      </div>
      <div className="daycare-row__col daycare-row__col--address">
        <h4 className="daycare-row__cell-header">ADDRESS</h4>
        {address}, 
        <p>{city} (City)</p>
      </div>

      <div className="daycare-row__col daycare-row__col--contact-info">
        <h4 className="daycare-row__cell-header">CONTACT INFORMATION</h4>
        <div className="daycare-row__contact-info">
          <a
            className="daycare-row__contact-item"
            href={"phone:" + contactPhone}
          >
            {contactPhone}
          </a>
          <a
            className="daycare-row__contact-item"
            href={"mailto:" + contactEmail}
          >
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="daycare-row__col daycare-row__col--actions">
        <button className="daycare-row__icon-button" onClick={onDelete}>
          <img className="daycare-row__icon" src={deleteIcon} alt="delete" />
        </button>
        
      </div>
    </div>
  );
}
export default DaycareRow;
