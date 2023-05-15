import { Link } from "react-router-dom";
import './ChildrenFramework.scss';
import editIcon from './../../assets/icons/edit-24px.svg';
import deleteIcon from './../../assets/icons/delete_outline-24px.svg';

function ChildrenFramework({
  id,
  child_name,
  address,
  contact_email,
  guadian_name,
  contact_phone,
  onDelete,
  onEdit,
}) {
  return (
    <div className="childrenFramework">
      <div className="childrenFramework__col childrenFramework__col--child_name">
        <h4 className="childrenFramework__cell-header">CHILD NAME</h4>
        <Link className="childrenFramework__link" to={`/children/${id}`}>
          {child_name}
        </Link>
      </div>
      <div className="childrenFramework__col childrenFramework__col--address">
        <h4 className="childrenFramework__cell-header">ADDRESS</h4>
        {address}
      </div>
      <div className="childrenFramework__col childrenFramework__col--contact_email">
        <h4 className="childrenFramework__cell-header">CONTACT EMAIl</h4>
        {contact_email}
      </div>

      <div className="childrenFramework__col childrenFramework__col--guadian_name">
        <h4 className="childrenFramework__cell-header">GUADIAN NAME</h4>
        {guadian_name}
      </div>
      <div className="childrenFramework__col childrenFramework__col--contact_phone">
        <h4 className="childrenFramework__cell-header">CONTACT PHONE</h4>
        {contact_phone}
      </div>
      <div className=" childrenFramework__col--actions">
        <button className="childrenFramework__icon-button" onClick={onDelete}>
          <img className="childrenFramework__icon" src={deleteIcon} alt="delete" />
        </button>
        <Link to={`/children/${id}/edit`}
          className="childrenFramework__icon-button childrenFramework__icon-button--edit"
          onClick={onEdit}
        >
          <img className="childrenFramework__icon" src={editIcon} alt="edit" />
        </Link>
      </div>
    </div>
  );
}
export default ChildrenFramework;
