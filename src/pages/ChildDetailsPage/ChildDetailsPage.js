import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ChildDetailsPage.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import ChildDetails from "../../components/ChildDetails/ChildDetails";
const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function ChildDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [child, setChild] = useState(null);
  useEffect(() => {
    if (child === null) {
      axios
        .get(`${baseUrl}/children/${id}`)
        .then((response) => {
          setChild(response.data);
        })
        .catch((e) => {
          alert(e);
        });
    }
  });

  if (!child) {
    return <p>loading</p>;
  }

  return (
    <main className="child-details-page">
      <div className="child-details-page__header">
        <h1 className="child-details-page__title">
          <button className="child-details-page__back-button" onClick={()=>navigate(-1)}>
            <img
              className="child-details-page__back-icon"
              src={backArrow}
              alt="back"
            />
          </button>
          {child.child_name}
        </h1>
        <Link to="./edit"> <button className="child-details-page__edit-button">
          <img
            className="child-details-page__edit-icon"
            src={editIcon}
            alt="edit"
          />
          <span className="child-details-page__edit-text">Edit</span>
        </button></Link>
      </div>
      <ChildDetails
        child_name={child.child_name}
        address={child.address}
        contact_email={child.contact_email}
        guadian={child.guadian_name}
        contact_phone={child.contact_phone}
        daycare_name={child.daycare_name}
      />
    </main>
  );
}
export default ChildDetailsPage;
