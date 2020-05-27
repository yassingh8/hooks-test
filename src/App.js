import React, { useState, useEffect } from 'react';
import { useForm } from "./useForm";
import ClassBasedComponent from './components/Class-Based-Component';
import FunctionalComponent from './components/FunctionalComponent';
// import FunctionBasedComponent from './components/FunctionBasedComponent';
import './App.css';
import { Hello } from './components/Hello';
import { Button } from 'reactstrap';

const App = () => {

  const [values, handleChange] = useForm({
    email: ""
  });

  const [showHello, setShowHello] = useState(true);
  const [showUsers, setShowUsers] = useState(false);

  useEffect( () => {
    console.log("imput changed");

    // return () => {
    //     console.log("input cleanup");
    // };
  }, [values.email]);

    return (
      <div className="App">
        {/* <ClassBasedComponent /> */}
        <Button onClick={() => setShowHello(!showHello)}>Show Hello</Button>
        { showHello && <Hello/>}<br/>
        <input name="email" placeholder= "email.." value={values.email} onChange={handleChange} /><br/><br/>
        <Button onClick={() => setShowUsers(!showUsers)}>Show Users List</Button><br/>
        { showUsers && <FunctionalComponent/>}
      </div>
    );
  }

export default App;
