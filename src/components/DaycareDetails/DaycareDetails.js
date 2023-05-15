import "./DaycareDetails.scss";

const DaycareDetails = ({daycare_name, address, city, contact_name, contact_position, contact_phone, contact_email}) => {
    return (
        <div className="Daycare-details__container-info">
          <div className="Daycare-details__container-address">
            <h4 className="Daycare-details__head">Daycare address:</h4>
            <p className="Daycare-details__text">
             {daycare_name}, {address}, {city} 
            </p>
          </div>
          <div className="Daycare-details__container-contact">
            <div className="Daycare-details__container-details Daycare-details__container-details--left">
              <h4 className="Daycare-details__head">contact name:</h4>
              <p className="wDaycare-details__text">{contact_name}</p>
              <p className="Daycare-details__text">{contact_position}</p>
            </div>
            <div className="Daycare-details__container-details Daycare-details__container-details--right">
              <h4 className="Daycare-details__head">contact information:</h4>
              <p className="wDaycare-details__text">{contact_phone}</p>
              <p className="Daycare-details__text">{contact_email}</p>
            </div>
          </div>
          {/* div for inventory list here */}
        </div> 
    )
}
export default DaycareDetails