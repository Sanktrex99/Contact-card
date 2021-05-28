import React, { useState } from 'react';


const ContactCard = (props) => {

    const [ToggleAge, setToggleAge] = useState(false);


    return (
        <div className="contact-card">
            <img src={props.avatar}
                alt="profile"></img>
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() => setToggleAge(!ToggleAge)}>Show Age</button>
                {ToggleAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    );
}


export default ContactCard;