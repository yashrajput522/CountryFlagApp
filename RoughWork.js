 import React from "react";
 import "./RoughWork.css"; 
 
import  { useState } from 'react';


// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// function RoughWork() {
//   const listItems = people.map((person) => {

//     if(person.includes("physicist")){
//         console.log(person,"Printing_physicist")
//     }
   
// return <li>{person}</li>;
//   });

//   return <ul>{listItems}</ul>;
// }



// export default RoughWork;

function ParentComponent() {

   const grandParentClick = (e)=> {
     //e.stopPropagation();
    console.log("Grand Parent Click")
    alert("Grand Parent Click")
   }

  const handleParentClick = (e) => {
   // e.stopPropagation();
    console.log("Parent Clicked")
    alert("Parent Clicked!");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Stops event bubbling
    console.log("Child Clicked")
    alert("Child Clicked!");
  };

  return (
    <>
    <h1 style={{textAlign: "center"}}> Event Bubbling Stop Through e.StopPropagation  </h1>
        <div className="grand-parent" onClick={grandParentClick} >
        Grand Parent Component
    <div className="parent" onClick={handleParentClick} >
      Parent Component
      <div className="child" onClick={handleChildClick} >
        Child Component (Click me)
      </div>
    </div>
    </div>
    </>
  );


  function MyForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Form submission prevented');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

}




export default ParentComponent;
