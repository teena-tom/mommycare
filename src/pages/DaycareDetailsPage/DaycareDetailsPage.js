import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "./DaycareDetailsPage.scss";
// import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import DaycareDetails from "../../components/DaycareDetails/DaycareDetails";
import { Link, useParams } from "react-router-dom";
import CtaButton from "../../components/CtaButton/CtaButton";
import ChildrenDetails from "../../components/ChildrenDetails/ChildrenDetails";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function DaycareDetailsPage({ mode = "view" }) {
  //const [singleWarehouse, setSingleWarehouse] = useState({}); * for later useState *
  const { id } = useParams();

  // TEMP


  const [daycare, setDaycare] = useState(null);


  useEffect(() => {
    if (daycare === null) {
      axios
        .get(`${baseUrl}/daycares/${id}`)
        .then(response => {
          setDaycare(response.data);
        })
        .catch(error => {
          alert(error);
          console.error(error);
        });
    }
  }, [id, daycare]); 

  const daycareUpdateHandler = () => {
    setDaycare(null);
  }

  return (

    <section className="daycare-details">
      <div className="daycare-details__header">
        <Link to="/" className="daycare-details__arrow">
          <img
            // onClick={() => navigate(-1)} //* for later useNavigate *
            src={backArrow}
            alt="back arrow"
            className="daycare-details__arrow-image"
          />
        </Link>
        {(mode === "view" && daycare !== null ) && <h1 className="daycare-details__title">{daycare.daycare_name}</h1>}       
        {(mode === "edit" && daycare !== null ) && <h1 className="daycare-details__title">Edit Daycare</h1>}


        {mode === "view" &&
          <Link to={`/${id}/edit`} className="daycare-details__edit">
          <CtaButton>
            <img
              src={edit}
              alt="pencil"
              className="daycare-details__edit-img"
            />
            <span className="daycare-details__edit-text">Edit</span>
          </CtaButton>
        </Link>}
      </div>
      
      {(mode === "view" && daycare !== null ) && <DaycareDetails 
                              daycareName={daycare.daycare_name}
                              address={daycare.address} 
                              city={daycare.city} 
                              limit={daycare.max_limit_of_children} 
                              contactName={daycare.contact_name} 
                              contactPhone={daycare.contact_phone}
                              contactEmail={daycare.contact_email}
                              position={daycare.contact_position} />} 
      {mode === 'view' && <ChildrenDetails daycareId={id}/>}
      
    </section>

  );
};
export default DaycareDetailsPage;
