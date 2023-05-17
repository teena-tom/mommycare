import "./DaycareDetails.scss";

const DaycareDetails = ({daycare_name, address, city, contactName, position, contactPhone, contactEmail}) => {
    return (
        <div className="Daycare-details__container-info">
          <div className="Daycare-details__container-address">
            <h4 className="Daycare-details__head">Daycare address</h4>
            <p className="Daycare-details__text">
              {address}, {city} 
            </p>
          </div>
          <div className="Daycare-details__container-contact">
            <div className="Daycare-details__container-details Daycare-details__container-details--left">
              <h4 className="Daycare-details__head">Contact name:</h4>
              <p className="wDaycare-details__text">{contactName}</p>
              <p className="Daycare-details__text">{position}</p>
            </div>
            <div className="Daycare-details__container-details Daycare-details__container-details--right">
              <h4 className="Daycare-details__head">Contact information:</h4>
              <p className="wDaycare-details__text">{contactPhone}</p>
              <p className="Daycare-details__text">{contactEmail}</p>
            </div>
          </div>
          {/* div for children list here */}
        </div> 
    )
}
export default DaycareDetails