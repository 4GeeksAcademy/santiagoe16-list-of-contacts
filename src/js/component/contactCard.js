import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ContactCard = () => {
    const {store, actions} = useContext(Context)

    return(
        <>
            {store.contacts.map((contact) => {
                return(
                    <div key={contact.id} style={{width: "930px"}} className="d-flex justify-content-between border p-3">
                        <div className="d-flex">
                            <img src="https://www.cepal.cl/wp-content/uploads/2021/04/James-C.-Hutson.jpg" className="rounded-circle me-5"/>
                        <div>
                            <h5>{contact.name}</h5>
                            <p className="mb-0 text-secondary"><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
                            <p className="mb-0 text-secondary"><i className="fas fa-phone me-2"></i> {contact.phone}</p>
                            <p className="mb-0 text-secondary"><i className="fas fa-envelope me-3"></i>{contact.email}</p>
                        </div>
                        </div>
                        <div>
                        <Link 
                            className="text-reset" 
                            to="/AddContact" 
                            state={{ contactId: contact.id }}
                        >
                            <i className="fas fa-pencil-alt me-4"></i>
                            </Link>
                            <i className="fas fa-trash me-5" onClick={()=>actions.deleteContact(contact.id)}></i>
                        </div>
                    </div>
                )
            })}
        </>
            
        
    )
}