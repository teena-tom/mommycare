import { useRef, useState, useEffect } from "react";
import "./RegisterNewChild.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "./../../assets/icons/arrow_back-24px.svg";
import errorIcon from "./../../assets/icons/error-24px.svg";
import regimg from "./../../assets/images/image-register-child.png";

const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";

export default function RegisterNewChild() {
  const childName = useRef(null);
  const address = useRef(null);
  const guadian_name = useRef(null);
  const contact_email = useRef(null);
  const contact_phone = useRef(null);
  const city = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  
  const [selectedDaycare, setSelectedDaycare] = useState(null);

  const [daycares, setDaycares] = useState([]);

  const [errors, setErrors] = useState({
    childName: false,
    address: false,
    guadian_name: false,
    contact_email: false,
    contact_phone: false,
    username: false,
    password: false,
    city: false,
    daycare: false,
  });
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/children`);
  };

  //Onload get daycares
  useEffect(() => {
    axios
      .get(`${baseUrl}/daycares`)
      .then((response) => {
        setDaycares(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error while retrieving daycares");
      });
    //eslint-disable-next-line
  }, []);

  const handleDaycareChange = (e) => {
    const daycareId = e.target.value;
    const daycare = daycares.find((d) => d.id === daycareId);
    setSelectedDaycare(daycare);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    console.log(childName.current.value);
    let newErrors = { ...errors };

    newErrors.childName = childName.current.value.trim() === "";

    newErrors.address = address.current.value.trim() === "";
    newErrors.guadian_name = guadian_name.current.value.trim() === "";
    newErrors.contact_email = contact_email.current.value.trim() === "";
    newErrors.contact_phone = contact_phone.current.value.trim() === "";
    newErrors.username = username.current.value.trim() === "";
    newErrors.password = password.current.value.trim() === "";
    newErrors.city = city.current.value.trim() === "";
    newErrors.daycare = !selectedDaycare;

    setErrors(newErrors);

    console.log(newErrors);

    if (
      newErrors.childName ||
      newErrors.address ||
      newErrors.guadian_name ||
      newErrors.contact_email ||
      newErrors.contact_phone ||
      newErrors.username ||
      newErrors.password ||
      newErrors.city ||
      newErrors.daycare
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const newChild = {
      child_name: childName.current.value,
      address: address.current.value,
      guadian_name: guadian_name.current.value,
      contact_email: contact_email.current.value,
      contact_phone: contact_phone.current.value,
      username: username.current.value,
      password: password.current.value,
      city: city.current.value,
      daycares_id: selectedDaycare.id,
    };
   
    axios

      .post(`${baseUrl}/children`, newChild)
      .then((response) => navigate(`/children`))
      
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };

  return (
    <main>
      <div className="register-newchild__header">
        <h1 className="register-newchild__title">
          <Link to="/">
            <button className="register-newchild__back-button">
              <img
                className="register-newchild__back-icon"
                src={backArrow}
                alt="back"
              />
            </button>
          </Link>
          {"Register New Child"}
        </h1>
      </div>
     
      <form className="register-newchild" onSubmit={handleSubmit}>
      <div className="register-newchild__formcontainer">
        <div className="register-newchild__formsection">
        <section className="register-newchild__details-container">

          <h2 className="register-newchild__heading">Child Details</h2>
          <div className="register-newchild__form-group">
            <div className="register-newchild__field-item">
              <label className="register-newchild__label" htmlFor="childName">
                Child name
              </label>
              <input
                className={`register-newchild__input ${
                  errors.childName ? "register-newchild__input--error" : ""
                }`}
                ref={childName}
                type="text"
                name="childName"
                id="childName"
                placeholder="Child Name"
              />
              {errors.childName && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label className="register-newchild__label" htmlFor="address">
                Address
              </label>
              <textarea
                ref={address}
                className={`register-newchild__input ${
                  errors.address ? "register-newchild__input--error" : ""
                } register-newchild__input--textarea`}
                name="address"
                id="address"
                placeholder="Enter address..."
              />
              {errors.address && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label
                className="register-newchild__label"
                htmlFor="contact_email"
              >
                Contact Email
              </label>
              <input
                className={`register-newchild__input ${
                  errors.contact_email ? "register-newchild__input--error" : ""
                }`}
                ref={contact_email}
                type="text"
                name="contact_email"
                id="contact_email"
                placeholder="Contact Email"
              />
              {errors.contact_email && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label
                className="register-newchild__label"
                htmlFor="guadian_name"
              >
                Guadian Name
              </label>
              <input
                className={`register-newchild__input ${
                  errors.guadian_name ? "register-newchild__input--error" : ""
                }`}
                ref={guadian_name}
                type="text"
                name="guadian_name"
                id="guadian_name"
                placeholder="Guadian Name"
              />
              {errors.guadian_name && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label
                className="register-newchild__label"
                htmlFor="contact_phone"
              >
                Contact Phone
              </label>
              <input
                className={`register-newchild__input ${
                  errors.contact_phone ? "register-newchild__input--error" : ""
                }`}
                ref={contact_phone}
                type="text"
                name="contact_phone"
                id="contact_phone"
                placeholder="Contact Phone"
              />
              {errors.contact_phone && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label className="register-newchild__label" htmlFor="city">
                City
              </label>
              <input
                className={`register-newchild__input ${
                  errors.city ? "register-newchild__input--error" : ""
                }`}
                ref={city}
                type="text"
                name="city"
                id="city"
                placeholder="City"
              />
              {errors.city && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label className="register-newchild__label" htmlFor="username">
                Username
              </label>
              <input
                className={`register-newchild__input ${
                  errors.username ? "register-newchild__input--error" : ""
                }`}
                ref={username}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              {errors.username && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
            <div className="register-newchild__field-item">
              <label className="register-newchild__label" htmlFor="password">
                Password
              </label>
              <input
                className={`register-newchild__input ${
                  errors.password ? "register-newchild__input--error" : ""
                }`}
                ref={password}
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
              {errors.password && (
                <div className="register-newchild__error-label">
                  <img
                    className="register-newchild__error-icon"
                    src={errorIcon}
                    alt="error"
                  />
                  This field is required
                </div>
              )}
            </div>
          </div>
          <div className="register-newchild__field-item">
            <label className="register-newchild__label" htmlFor="daycare">
              Daycare
            </label>
            <select
              className={`register-newchild__input ${
                errors.daycare ? "register-newchild__input--error" : ""
              } register-newchild__input--select`}
              name="daycare"
              value={selectedDaycare?.id}
              onChange={handleDaycareChange}
            >
              <option value="">Please Select</option>
              {daycares.map((daycare) => (
                <option key={daycare.id} value={daycare.id}>
                  {daycare.daycare_name}
                </option>
              ))}
            </select>
            {errors.daycare && (
              <div className="register-newchild__error-label">
                <img
                  className="register-newchild__error-icon"
                  src={errorIcon}
                  alt="error"
                />
                This field is required
              </div>
            )}
          </div>
        </section>
        </div>
        <div className="register-newchild__imagesection">
          <img className="register-newchild__image" alt="imaage" src={regimg}></img>
        </div>
        </div>

        <div className="register-newchild__actions">
          <button
            className="iregister-newchild__button register-newchild__button--secondary"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="register-newchild__button register-newchild__button--primary"
            type="submit"
          >
            Add Child
          </button>
        </div>
      </form>
    </main>
  );
}
