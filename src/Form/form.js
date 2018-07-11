import React from 'react';


const form = (props) => {
return  (
    <div className = "Form">
    <p onClick = {props.click}> Project Name: {props.project}, Creator: {props.create}, Date Created {props.date}. </p>
    <p> {props.children}</p>
    </div>
  );
}

export default form;
