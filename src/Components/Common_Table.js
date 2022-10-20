import React from "react";
import Details from "./Details";
import './Common_Table.css';

function Common_Table(props)
{
    return (
        <>
            <h4 className="heading">Personal Information</h4>
             <tr className="table_info">
                <tr>
                    <td>Name</td>
                    <td>{Details[0].name}</td>
                </tr>
                <tr>
                    <td>Roll Number</td>
                    <td>{Details[0].roll}</td>
                </tr>
                <tr>
                    <td>Father Name</td>
                    <td>{Details[0].father}</td>
                </tr>
                <tr>
                    <td>Mother Name</td>
                    <td>{Details[0].mother}</td>
                </tr>
                <tr>
                    <td>Date Of Birth</td>
                    <td>{Details[0].dob}</td>
                </tr>
                <tr>
                    <td>Course</td>
                    <td>{Details[0].course}</td>
                </tr>
                
              {/* <td>Name: {Details[0].name}</td> */}
              {/* <td>Roll Number: {Details[0].roll}</td>
              <td>Father Name: {Details[0].father}</td>
              <td>Mother Name: {Details[0].mother}</td>
              <td>Date Of Birth: {Details[0].dob}</td>
              <td>Course: {Details[0].course}</td> */}
            </tr>
            <h4 className="heading">Student Contact Details</h4>
            <tr className="table_info">
                <tr>
                    <td>Mobile Number</td>
                    <td>{Details[0].mobile}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>{Details[0].email}</td>
                </tr>
                <tr>
                    <td>Parent Mobile Number</td>
                    <td>{Details[0].mobile_parent}</td>
                </tr>
                <tr>
                    <td>Parent Email</td>
                    <td>{Details[0].email_pare}</td>
                </tr>
            </tr>
            <h4 className="heading">Address Details</h4>
            <tr className="table_info">
                <tr>
                    <td>Current Address</td>
                    <td>{Details[0].curr_address}</td>
                </tr>
                <tr>
                    <td>District</td>
                    <td>{Details[0].district}</td>
                </tr>
                <tr>
                    <td>PinCode</td>
                    <td>{Details[0].pin}</td>
                </tr>
            </tr>
        </> 
    )
}

export default Common_Table;