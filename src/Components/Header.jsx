import React from "react";
// import logo from './Photos/LMS Logo.png';

import logo from './LMS.png';
const user_name = "Karan Nasa"; 

function Header()
{
    return(
        <>
        <img className="logo_img" src={logo} alt="Logo" />
        <h3 className="text1">Thapar Institute Of Engineering And Technology</h3>
        <div className="sign_details">
          <h6>Welcome {user_name}</h6>
          <button type="button" className="btn btn-outline-secondary">Sign-Out</button>
        </div>
        </>
    )
}

export default Header;