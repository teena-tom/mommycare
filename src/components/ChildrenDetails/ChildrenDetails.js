import { useEffect, useState } from "react";
import ChildrenFramework from "./../ChildrenFramework/ChildrenFramework";
import axios from "axios";

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
  },[ChildrenList]);
  console.log(ChildrenList);
  return (
    (
      <div className="children-list">
        <div
          className="children-list__header-child children-list__header-child--child_name
"
        >
          CHILD NAME{" "}
        </div>
        <div
          className="children-list__header-child children-list__header-child--address
"
        >
          ADDRESS{" "}
        </div>
        <div className="children-list__header-child children-list__header-child--contact_email">
          CONTACT EMAIl{" "}
        </div>
        <div className="children-list__header-child children-list__header-child--guadian_name">
          GUADIAN NAME{" "}
        </div>
        <div className="children-list__header-child children-list__header-child--contact_phone">
          CONTACT PHONE{" "}
        </div>
      </div>
    ) >
    (
      <div className="children-list__body">
        <div className="children-list__row">
            {/* {ChildrenList !== null} */}
          {ChildrenList && ChildrenList.map((child) => (
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
          console.log(child_name)
        </div>
      </div>
    )
  );
}
export default ChildrenDetails;
