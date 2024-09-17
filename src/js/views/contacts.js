import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contacts.css";
import { ContactCard } from "../component/contactCard";

export const Contacts = () => (
	<div className="mt-5 mx-auto"  style={{width: "930px"}}>
		<div className="d-flex align-item-end mb-2">
			<Link className="ms-auto" to="/AddContact">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</div>
		<ContactCard/>
	</div>
);
