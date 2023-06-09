import "./ChildDetails.scss";

function ChildDetails({
  child_name,
  address,
  contact_email,
  guadian,
  contact_phone,
  daycare_name,
}) {
  return (
    <div className="child-details">
      <div className="child-details__container">
        <div className="child-details__detail-child">
          <h4 className="child-details__detail-label">NAME:</h4>
          <p>{child_name}</p>
        </div>
        <div className="child-details__detail-child">
          <h4 className="child-details__detail-label">ADDRESS:</h4>
          <p>{address}</p>
        </div>
      </div>
      <div className="child-details__container">
        <div className="child-details__detail-child">
          <h4 className="child-details__detail-label">CONTACT EMAIL</h4>
          <p>{contact_email}</p>
        </div>

        <div className="child-details__detail-child">
          <h4 className="child-details__detail-label">GUADIAN</h4>
          <p>{guadian}</p>
        </div>
        <div className="child-details__detail-child">
          <h4 className="child-details__detail-label">CONTACT PHONE:</h4>
          <p>{contact_phone}</p>
        </div>

        <div className="child-details__detail-child">
          <h4 className="child-details__detail-label">DAYCARE NAME</h4>
          <p>{daycare_name}</p>
        </div>
      </div>
    </div>
  );
}
export default ChildDetails;
