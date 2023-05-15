import "./DaycareList.scss";
import DaycareRow from "../DaycareRow/DaycareRow";



function DaycareList({daycares, onDelete}) {

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id) => {};

  return (
    <div className="Daycare-list">
      <div className="Daycare-list__header-row">
        <div className="Daycare-list__header-item Daycare-list__header-item--name">
          DAYCARE
        </div>
        <div className="Daycare-list__header-item Daycare-list__header-item--address">
          ADDRESS 
        </div>
        <div className="Daycare-list__header-item Daycare-list__header-item--contact-name">
          CONTACT NAME 
        </div>
        <div className="Daycare-list__header-item Daycare-list__header-item--contact-info">
          CONTACT INFORMATION 
        </div>
        <div className="Daycare-list__header-item">
          ACTIONS
        </div>
      </div>
      <div className="Daycare-list__body">
        <div className="Daycare-list__row">
          {daycares.map((daycare) => (
            <DaycareRow
              key={daycare.id}
              id={daycare.id}
              name={daycare.daycare_name}
              address={daycare.address}
              city={daycare.city}
              
              contactName={daycare.contact_name}
              contactEmail={daycare.contact_email}
              contactPhone={daycare.contact_phone}
              contactPosition={daycare.contact_position}
              onDelete={() => handleDelete(daycare.id)}
              onEdit={() => handleEdit(daycare.id)}
            />
            
          ))}
         
        </div>
      </div>
    </div>
  );
}
export default DaycareList;
