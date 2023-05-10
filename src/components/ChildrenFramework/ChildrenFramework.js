import { Link } from "react-router-dom";
import './ChildrenFramework.scss';

function ChildrenFramework({
  id,
  child_name,
  address,
  contact_email,
  guadian_name,
  contact_phone,
}) {
  return (
    <div className="childrenFramework">
      <div className="childrenFramework__col childrenFramework__col--child_name">
        <h4 className="childrenFramework__cell-header">CHILD NAME</h4>
        <Link className="childrenFramework__link" to={`/${id}`}>
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
    </div>
  );
}
export default ChildrenFramework;
