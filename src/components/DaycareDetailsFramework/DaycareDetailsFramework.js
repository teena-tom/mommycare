import sortIcon from "../../assets/Icons/sort-24px.svg";
import "./DaycareDetailsFramework.scss";

const DaycareDetailsFramework = () => {
  return (
    <div className="children-framework">
      <div className="children-framework__container">
        <h4 className="children-framework__container-headers">inventory item</h4>
        <img src={sortIcon} alt="sort" className="children-framework__container-sort" />
      </div>
      <div className="children-framework__container">
        <h4 className="children-framework__container-headers">category</h4>
        <img src={sortIcon} alt="sort" className="children-framework__container-sort" />
      </div>
      <div className="children-framework__container">
        <h4 className="children-framework__container-headers">status</h4>
        <img src={sortIcon} alt="sort" className="children-framework__container-sort" />
      </div>
      <div className="children-framework__container">
        <h4 className="children-framework__container-headers">quantity</h4>
        <img src={sortIcon} alt="sort" className="children-framework__container-sort" />
      </div>
      <div className="children-framework__container">
        <h4 className="children-framework__container-headers">actions</h4>
      </div>
    </div>
  );
};

export default DaycareDetailsFramework;