import React from "react";
import '../App.css';


export default function BasicInfo(props){
    return (
        <div className="components">
          <p>Name: {props.person.Name}</p>
          <p>Number: {props.person.Number}</p>
          <p>DOB: {props.person.DOB}</p>
        </div>
      );
}