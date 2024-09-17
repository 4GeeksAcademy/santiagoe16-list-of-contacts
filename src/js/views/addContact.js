import React, { useState, useEffect, useContext } from "react";
import { Form, Link, useLocation } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addcontact.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const location = useLocation();
    const { contactId } = location.state || {};
    console.log(contactId);
	const [formData, setFormData] = useState({
		name: "",
		address: "",
		phone: "",
		email: ""
	})

	const handleChange = (e)=>{
		const { name, value } = e.target;

		setFormData({...formData,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(contactId);
		
		if(contactId == undefined){
			actions.submitForm(formData);
		}
		else{
			actions.editContac(contactId,formData)
		}
		setFormData({
			name: "",
			address: "",
			phone: "",
			email: ""
		})
	};

	return (
		<div className="mt-5 mx-auto" style={{width: "930px"}}>
			<h1 className="text-center mb-3">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Name</label>
					<input type="text" name="name" value={formData.name} id="name" onChange={handleChange} className="form-control" placeholder="Enter the name" required/>
				</div>

				<div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input type="text" name="address" value={formData.address} id="address" onChange={handleChange} className="form-control" placeholder="Enter the address"/>
				</div>

				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input type="text" name="phone" value={formData.phone} id="phone" onChange={handleChange} className="form-control" placeholder="Enter the phone" required/>
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="form-label">Email</label>
					<input type="email" name="email" value={formData.email} id="email" onChange={handleChange} className="form-control" placeholder="Enter the email"/>
				</div>

				<div className="d-grid gap-2 col-12">
					<button className="btn btn-primary" type="submit">Save</button>
				</div>
			</form>
			<Link className="ms-1" to="/">or get back to contacts</Link>
		</div>
	);
};