import { useEffect, useState } from 'react';
import './EditChild.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CtaButton from '../CtaButton/CtaButton';

const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";

function EditChild() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [values, setValues] = useState(null);
    const [daycares, setDaycares] = useState(null);
    
    // { childName: child.child_name, address: child.address, city: child.city, guadian_name: child.guadian_name, daycare: child.daycares_id, contact_phone:child.contact_phone, contact_email: child.contact_email,  username: child.username, password: child.password}


    //Onload get daycares 
    useEffect(() => {
        axios
            .get(`${baseUrl}/children/${id}`)
            .then(response => {
                setValues(response.data);
                // setValues({...values,"daycare": response.data.find(daycare => daycare.daycare_name===child.daycare_name).id});
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                alert("Error while retrieving daycares");
            });
        }, [id])
        

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSave = () => {
        if(!values.child_name || !values.address || !values.guadian_name || !values.contact_email || !values.contact_phone || !values.username || !values.password || !values.city){
            alert("Missing required fields.");
            return;
        }

        axios
            .put(`${baseUrl}/children/${id}`, {
                "daycare_id": values.daycare,
                "child_name": values.child_name,
                "address": values.address,
                "city": values.city,
                "guadian_name": values.guadian_name,
                "contact_phone": values.contact_phone,
                "contact_email":values.contact_email,
                "username": values.username,
                "password": values.password
            })
            .then(response => {
                // onChildUpdated();
                navigate(`/children/${id}`);
            })
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }

    const handleCancel = () => {
        navigate(-1);
    }

    if (!values) {
        return <p>loading</p>;
      }
    return (
        <form className="edit-child">
            <div className="edit-child__details-container">
                <h2 className='edit-child__heading'>Child Details</h2>
                <div className="edit-child__form-group">
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="childName">Child name</label>
                        <input className="edit-child__input" type="text" name="childName" id="childName" required={true} placeholder='Child Name'  value={values.child_name} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="address">Address</label>
                        <textarea className="edit-child__input edit-child__input--textarea" name="address" required={true} id="address" placeholder='Enter address...' value={values.address} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="city">City</label>
                        <input className="edit-child__input" type="text" name="city" id="city" required={true} placeholder='City'  value={values.city} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="guadian_name">Guadian Name</label>
                        <input className="edit-child__input" type="text" name="guadian_name" id="guadian_name" required={true} placeholder='GuadianName'  value={values.guadian_name} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="contact_phone">Contact Phone</label>
                        <input className="edit-child__input" type="text" name="contact_phone" id="contact_phone" required={true} placeholder='ContactPhone'  value={values.contact_phone} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="contact_email">Contact Email</label>
                        <input className="edit-child__input" type="text" name="contact_email" id="contact_email" required={true} placeholder='ContactEmail'  value={values.contact_email} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="username">Username</label>
                        <input className="edit-child__input" type="text" name="username" id="username" required={true} placeholder='Username'  value={values.username} onChange={handleChange} />
                    </div>
                    <div className="edit-child__field-item">
                        <label className="edit-child__label" htmlFor="password">Password</label>
                        <input className="edit-child__input" type="text" name="password" id="password" required={true} placeholder='Password'  value={values.password} onChange={handleChange} />
                    </div>


                    
                </div>
            </div>
           
            <div className="edit-inventory-item__actions">
                <CtaButton type="secondary" onClick={handleCancel}>Cancel</CtaButton>
                <CtaButton onClick={handleSave}>Save</CtaButton>
            </div>
        </form>
    );
}
export default EditChild;