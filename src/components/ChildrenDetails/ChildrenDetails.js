import { useEffect, useState } from "react";
import ChildrenFramework from "./../ChildrenFramework/ChildrenFramework";
import axios from "axios";
import './ChildrenDetails.scss';
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function ChildrenDetails() {
  const [ChildrenList, setChildrenList] = useState(null);
  useEffect(() => {
    if (ChildrenList === null) {
      axios
        .get(`${baseUrl}/children`)
        .then((response) => {
          setChildrenList(response.data);
        })

        .catch((error) => {
          alert(error);
        });
    }
  }, [ChildrenList]);
  return (
    <>
      <div className="childrenDetails">
        
        <div className="childrenDetails__header-row">
          <div className="childrenDetails__header-child childrenDetails__header-child--child_name">
            CHILD NAME{" "}
          </div>
          <div className="childrenDetails__header-child childrenDetails__header-child--address">
            ADDRESS{" "}
          </div>
          <div className="childrenDetails__header-child childrenDetails__header-child--contact_email">
            CONTACT EMAIl{" "}
          </div>
          <div className="childrenDetails__header-child childrenDetails__header-child--guadian_name">
            GUADIAN NAME{" "}
          </div>
          <div className="childrenDetails__header-child childrenDetails__header-child--contact_phone">
            CONTACT PHONE{" "}
          </div>
        </div>
        <div className="childrenDetails__body">
          <div className="childrenDetails__row">
            {ChildrenList &&
              ChildrenList.map((child) => (
                <ChildrenFramework
                  key={child.id}
                  id={child.id}
                  child_name={child.child_name}
                  address={child.address}
                  contact_email={child.contact_email}
                  guadian_name={child.guadian_name}
                  contact_phone={child.contact_phone}
                />
              ))}
          </div>
        </div>
      </div>
      <Link to={`/children/register`}> <button className="childrenDetails__register-button">
          {/* <img
            className="child-details-page__register-icon"
            src={editIcon}
            alt="edit"
          /> */}
          <span className="childrenDetails__regitser-text">Sign-up</span>
        </button></Link>
    </>
  );
}
export default ChildrenDetails;
