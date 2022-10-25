import React, {useState, useEffect} from 'react'
import { NavLink , useHistory} from 'react-router-dom'
import "./Registeration.css"

const Registeration = () => {

  const history = useHistory();

  const [user, setUser] = useState({
      name : "", password : "", rollno : "", fathername : "", dateofbirth : "",
      branch : "", bloodgroup : "", validtill : "", mobileno : "", email : "",
      parentmobilenumber : "", parentemail : "", currentaddress : "", district : "", pincode : ""
  });

  let name, value;

  const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name] : value});
  }

  const PostData = async (e) => {
    e.preventDefault();
    const {name, password, rollno, fathername, dateofbirth, branch, bloodgroup, validtill,
      mobileno, email, parentmobilenumber, parentemail, currentaddress, district, pincode} = user;
    const res = await fetch("/register", {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name, password, rollno, fathername, dateofbirth, branch, bloodgroup, validtill,
        mobileno, email, parentmobilenumber, parentemail, currentaddress, district, pincode
      })
    });
    
    const data = await res.json();
    console.log(data);

    if(data.status === 500 || !data){
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    }else{
      // window.alert("Registeration successful");
      console.log("Registeration successful");
      history.push("/login");
    }

  }

  return (
    <div>
      <div className = "outer-form-div-register">
        <form>
          <div>
            <input type = "text" name = "name" id = "Name-register" autoComplete = "on" placeholder='Name'
            value = {user.name} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "password" name = "password" id = "Password-register" autoComplete = "on" placeholder='Password'
            value = {user.password} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "rollno" id = "RollNumber-register" autoComplete = "on" placeholder='RollNumber'
            value = {user.rollno} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "fathername" id = "FatherName-register" autoComplete = "on" placeholder='FatherName'
            value = {user.fathername} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "date" name = "dateofbirth" id = "DateOfBirth-register" autoComplete = "on" placeholder='DateOfBirth'
            value = {user.dateofbirth} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "branch" id = "Branch-register" autoComplete = "on" placeholder='Branch'
            value = {user.branch} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "bloodgroup" id = "BloodGroup-register" autoComplete = "on" placeholder='BloodGroup'
            value = {user.bloodgroup} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "date" name = "validtill" id = "ValidTill-register" autoComplete = "on" placeholder='ValidTill'
            value = {user.validtill} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "mobileno" id = "MobileNumber-register" autoComplete = "on" placeholder='MobileNumber'
            value = {user.mobileno} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "email" name = "email" id = "Email-register" autoComplete = "on" placeholder='Email'
            value = {user.email} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "number" name = "parentmobilenumber" id = "ParentMobileNumber-register" autoComplete = "on" placeholder='ParentMobileNumber'
            value = {user.parentmobilenumber} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "email" name = "parentemail" id = "ParentEmail-register" autoComplete = "on" placeholder='ParentEmail'
            value = {user.parentemail} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "currentaddress" id = "CurrentAddress-register" autoComplete = "on" placeholder='CurrentAddress'
            value = {user.currentaddress} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "district" id = "District-register" autoComplete = "on" placeholder='District'
            value = {user.district} onChange = {handleInputs}/>
          </div>
          <div>
            <input type = "text" name = "pincode" id = "Pincode-register" autoComplete = "on" placeholder='PinCode'
            value = {user.pincode} onChange = {handleInputs}/>
          </div>
          <div className='evaluate-button'>
            <input type = "submit" name = "register" id = "register-register" 
            value = "Register" onClick={PostData}/>
            <br/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registeration