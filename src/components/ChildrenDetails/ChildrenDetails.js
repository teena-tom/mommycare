import { useEffect, useState } from "react";
import ChildrenFramework from "./../ChildrenFramework/ChildrenFramework";
import axios from "axios";
import './ChildrenDetails.scss';
import { Link } from "react-router-dom";
import DeleteModel from './../DeleteModel/DeleteModel';

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function ChildrenDetails({ daycareId = null }) {
  const [ChildrenList, setChildrenList] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const deletingChild = ChildrenList?.find(
    (child) => child.id === deletingId
  );
  useEffect(() => {
    if (ChildrenList === null) {

      const url = daycareId === null ? `${baseUrl}/children` :  `${baseUrl}/daycares/${daycareId}/children`

      axios
        .get(url)
        // .get(`${baseUrl}/children`)
        .then((response) => {
          setChildrenList(response.data);
        })

        .catch((error) => {
          alert(error);
        });
    }
  }, [ChildrenList]);

  const handleDelete = (id) => {
    setDeletingId(id);
  };

  const handleDeleteConfirmed = (id) => {
    axios
      .delete(`${baseUrl}/children/${deletingId}`)
      .then((response) => {
        setDeletingId(null);
        setChildrenList(null); //Triggers a child list to reload
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };
  const handleDeleteCancelled = () => {
    setDeletingId(null);
  };

  const handleEdit = (id) => { };
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
          <div className="inventory-list__header-item">ACTIONS</div>
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
                  onDelete={() => handleDelete(child.id)}
                onEdit={() => handleEdit(child.id)}
                />
              ))}
          </div>
        </div>
      </div>
      {deletingChild && (
        <DeleteModel
          title={`Delete ${deletingChild.child_name} child?`}
          message={`Please confirm that you'd like to delete ${deletingChild.child_name} from the list of children. You won't be able to undo this action.`}
          onConfirm={handleDeleteConfirmed}
          onCancel={handleDeleteCancelled}
        />
      )}

      <Link to={`/children/register`} className="childrenDetails__registerbutton"> <button className="childrenDetails__register-button">
         
          <span className="childrenDetails__regitser-text">Sign-up</span>
        </button></Link>
    </>
  );
}
export default ChildrenDetails;
