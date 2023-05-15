import "./DaycarePage.scss";
import DaycareList from "../../components/DaycareList/DaycareList";
// import NewWarehouse from "../../components/NewWarehouse/NewWarehouse";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import DeleteModel from "../../components/DeleteModel/DeleteModel";
import CtaButton from "../../components/CtaButton/CtaButton";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";


function DaycarePage({mode = "view"}) {
  const [daycares, setDaycares] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const deletingDaycare = daycares?.find(daycare => daycare.id === deletingId);


  useEffect(() => {
    if (daycares === null) {
      axios
        .get(`${baseUrl}/Daycares`)
        .then(response => {
          setDaycares(response.data);
        })
        .catch(error => {
          alert(error);
          console.error(error);
        });
    }
  }, [daycares]);

  const handleDelete = (id) => {
    setDeletingId(id);
  };

  const handleDeleteConfirmed = (id) => {
    axios
      .delete(`${baseUrl}/daycares/${deletingId}`)
      .then(response => {
        setDeletingId(null);
        setDaycares(null); //Triggers a warehouse list to reload
      })
      .catch(error => {
        alert(error);
        console.error(error);
      });
  };
  const handleDeleteCancelled = () => {
    setDeletingId(null);
  };

  return (
      
    <main className="Daycares-Page">
      <div className="Daycares-Page__header">
        {mode === "add" && 
        <> 
        <Link to="/">
          <button className="Daycares-Page__back-button">
            <img className="Daycares-Page__arrow" src={backArrow} alt="back" />
          </button>
        </Link>
        {/* <h1 className="Daycares-Page__title">Add New Warehouse</h1> */}
        </>
        }
        
        {mode === "view" &&
        <>
         <h1 className="Daycares-Page__title">Daycares</h1>
        <input type="search" name="search" className="Daycares-Page__search-field" placeholder="Search..." />
        {/* <Link to="/add"><CtaButton>+ Add New Daycare</CtaButton></Link> */}
        </>
        }
      </div>

      {mode === "view" && (daycares !== null
        
          ? <DaycareList daycares={daycares} onDelete={handleDelete} />
          : <h2>Loading...</h2>)
        }

        {deletingDaycare && <DeleteModel
          title={`Delete ${deletingDaycare.daycare_name} daycare?`}
          message={`Please confirm that you'd like to delete ${deletingDaycare.daycare_name} from the list of daycares. You won't be able to undo this action.`}
          onConfirm={handleDeleteConfirmed}
          onCancel={handleDeleteCancelled}
        />
        } 
      {/* {mode === "add" && <NewDaycare />}       */}
    </main>        
  );
}
export default DaycarePage;
