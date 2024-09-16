import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Contact = () => {
    const {store, actions} = useContext(Context)

    return(
        <>
            {store.contacts.map((contact) => {
                return(
                    <div key={contact.id} className="w-100 d-flex justify-content-between border p-4">
                        <div className="d-flex">
                            <img src="https://www.cepal.cl/wp-content/uploads/2021/04/James-C.-Hutson.jpg" className="rounded-circle"/>

                        <div>
                            <h5>{contact.name}</h5>
                            <p>{contact.address}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                        </div>
                        </div>
                        <div>
                            <i className="fas fa-trash me-3" onClick={()=>actions.deleteContact(contact.id)}>{contact.id}</i>
                            <Link 
                                className="text-reset" 
                                to="/demo" 
                                state={{ contactId: contact.id }}
                            >
                                <i className="fas fa-pencil-alt"></i>
                            </Link>
                            
                        </div>
                    </div>
                )
            })}
        </>
            
        
    )
}