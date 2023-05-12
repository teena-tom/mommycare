import { useRef, useState, useEffect } from 'react';
import './RegisterNewChild.scss'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import errorIcon from '../../assets/icons/error-24px.svg';


export default function RegisterNewChild() {

    const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";
    const childName = useRef(null);
    const address = useRef(null);
    const guadian_name = useRef(null);
    const contact_email= useRef(null);
    const contact_phone = useRef(null);
    const city= useRef(null);
    const username= useRef(null);
    const password= useRef(null);
    const DaycareId= useRef(null);
    
    const [selectedDaycare, setSelectedDaycare] = useState(null);
    
    const [daycares, setDaycares] = useState([]);
  
    const [errors, setErrors] = useState({ childName: false, address: false, guadian_name: false, contact_email: false,contact_email:false, username:false, password:false, city:false, daycare: false });
    const navigate = useNavigate();


    const handleCancel = () => {
        navigate(`/children`);

    }

    

    //Onload get warehouses and categories
    useEffect(() => {
        axios
            .get(`${baseUrl}/daycares`)
            .then(response => {
                setDaycares(response.data);
            })
            .catch(error => {
                console.error(error);
                alert("Error while retrieving daycares");
            });
      
    }, [])


    const handleDaycareChange = (e) => {
        const daycareId = e.target.value;
        const daycare = daycares.find((d) => d.id === daycareId);
        setSelectedDaycare(daycare);
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        let newErrors = { ...errors };

        newErrors.childName = childName.current.value.trim() === "";
        newErrors.address = address.current.value.trim() === "";
        newErrors.guadian_name = guadian_name.current.value.trim() === "";
        newErrors.contact_email = contact_email.current.value.trim() === "";
        newErrors.contact_phone= contact_phone.current.value.trim() === "";
        newErrors.username= username.current.value.trim() === "";
        newErrors.password= password.current.value.trim() === "";
        newErrors.city= city.current.value.trim() === "";
        newErrors.daycare = !selectedDaycare;

        setErrors(newErrors);

        console.log(newErrors);

        if (newErrors.childName || newErrors.address || newErrors.guadian_name || newErrors.contact_email || newErrors.contact_phone || newErrors.username || newErrors.password || newErrors.city|| newErrors.daycare) {
            alert("Please fill out all fields.");
            return;
        }

        // check that quantity input is a postive number
        // const quantityValue = quantity.current?.value ?? 0;
        
        // if (isNaN(quantityValue) || quantityValue < 0) {
        //     alert("Quantity must be a positive number..");
        // }
        //create new item
        const newItem = {
            child_name: childName.current.value,
            address : address.current.value,
            guadian_name : guadian_name.current.value,
            contact_email : contact_email.current.value,
            contact_phone: contact_phone.current.value,
            username: username.current.value,
            password: password.current.value,
            city: city.current.value,
            
            daycare_id: selectedDaycare.id,
        }

        //send new item to server
        axios.post(`http://localhost:5050/api/children`, newItem)
            .then(response => navigate(`/children/${response.data.id}`))
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }


    return (
        <main>
            <div className="register-newchild__header">
                <h1 className="register-newchild__title">
                    <Link to="/"><button className="register-newchild__back-button"><img className="register-newchild__back-icon" src={backArrow} alt="back" /></button></Link>{"Add New Inventory Item"}</h1>
            </div>
            <form className="register-newchild" onSubmit={handleSubmit}>
                <section className="register-newchild__details-container">
                    <h2 className='register-newchild__heading'>Child Details</h2>
                    <div className="register-newchild__form-group">
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="childName" >Child name</label>
                            <input className={`register-newchild__input ${errors.childName ? "register-newchild__input--error" : ""}`} ref={childName} type="text" name="childName" id="childName" placeholder='Child Name' />
                            {errors.childName && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="address">Address</label>
                            <textarea ref={address} className={`register-newchild__input ${errors.address ? "register-newchild__input--error" : ""} register-newchild__input--textarea`} name="address" id="address" placeholder='Enter address...' />
                            {errors.address && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="contact_email" >Contact Email</label>
                            <input className={`register-newchild__input ${errors.contact_email ? "register-newchild__input--error" : ""}`} ref={childName} type="text" name="contact_email" id="contact_email" placeholder='Contact Email' />
                            {errors.contact_email && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="contact_phone" >Contact Phone</label>
                            <input className={`register-newchild__input ${errors.contact_phone ? "register-newchild__input--error" : ""}`} ref={contact_phone} type="text" name="contact_phone" id="contact_phone" placeholder='Contact Phone' />
                            {errors.contact_phone && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="city" >City</label>
                            <input className={`register-newchild__input ${errors.city ? "register-newchild__input--error" : ""}`} ref={city} type="text" name="city" id="city" placeholder='City' />
                            {errors.city && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="username" >Username</label>
                            <input className={`register-newchild__input ${errors.username ? "register-newchild__input--error" : ""}`} ref={username} type="text" name="usename" id="username" placeholder='Username' />
                            {errors.username && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="password" >Password</label>
                            <input className={`register-newchild__input ${errors.password ? "register-newchild__input--error" : ""}`} ref={password} type="text" name="password" id="password" placeholder='Password' />
                            {errors.password && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                      


                    </div>
                    <div className="register-newchild__field-item">
                            <label className="register-newchild__label" htmlFor="daycare">Daycare</label>
                            <select className={`register-newchild__input ${errors.daycare ? "register-newchild__input--error" : ""} register-newchild__input--select`} name="daycare" value={selectedDaycare?.id} onChange={handleDaycareChange}>
                                <option value="">Please Select</option>
                                {daycares.map((daycare) => (
                                    <option key={daycare.id} value={daycare.id}>{daycare.daycare_name}</option>
                                ))}
                            </select>
                            {errors.daycare && <div className='register-newchild__error-label'><img className='register-newchild__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                </section>
                

                <div className="register-newchild__actions">
                    <button className="iregister-newchild__button register-newchild__button--secondary" type="button">Cancel</button>
                    <button className="register-newchild__button register-newchild__button--primary" type="submit">Add Child</button>
                </div>
            </form>
        </main >

    )
}

