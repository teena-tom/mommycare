import "./WarehouseRow.scss";
import { Link, useNavigate } from "react-router-dom";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
// import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function DaycareRow({
  id,
  name,
  address,
  city,
  country,
  contact_name,
  contact_email,
  contact_phone,
//   onDelete,
  onEdit,
}) {
  return (
    <div className="daycare-row">
      <div className="daycare-row__col daycare-row__col--name">
        <h4 className="daycare-row__cell-header">WAREHOUSE</h4>
        <Link className="daycare-row__link" to={`/${id}`}>
          {name}
          <img
            className="daycare-row__icon"
            src={chevronRightIcon}
            alt="open"
          />
        </Link>
      </div>
      <div className="daycare-row__col daycare-row__col--contact-name">
        <h4 className="daycare-row__cell-header">CONTACT NAME</h4>
        {contactName}
      </div>
      <div className="daycare-row__col daycare-row__col--address">
        <h4 className="daycare-row__cell-header">ADDRESS</h4>
        {address}, {city}, {country}
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
        <Link className="daycare-row__link" to={`/${id}/edit`}>
          <img className="daycare-row__icon" src={editIcon} alt="edit" />
        </Link>
      </div>
    </div>
  );
}
export default DaycareRow;