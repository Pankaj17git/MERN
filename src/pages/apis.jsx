import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../components/header";

function Apis() {
  // const [count, setcount] = useState(0);
  const [data, setData] = useState({
    name: "",
    lastName: "",
    password: "",
    email: "",
    dob: "",
    phone: "",
  });

  const [alldata, setAllData] = useState([]);


  let Navigation = useNavigate();
  const HandleClick = () => {
    Navigation("/form1");
    console.log("Navigation to form1");
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data:", data);
    const updateData = [...alldata, data];
    setAllData(updateData);
    localStorage.setItem("userData", JSON.stringify(updateData));
    setData({
      name: "",
      lastName: "",
      password: "",
      email: "",
      dob: "",
      phone: "",
    });
  }

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    try {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        setAllData(parsedData); 
      } else {
        setAllData([]);
      }
    } catch (error) {
      console.error("Error parsing stored data:", error);
      setAllData([]);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }} className="container mt-4 border border-1">
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password:</label>
            <input 
              type="number"
              id="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={data.dob}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <button type="submit"
            className="btn btn-primary"
          >Submit</button>
        </form>

        <div className="mt-4" style={{ maxWidth: "400px", margin: "auto" }}>
          <div className="d-grid gap-2">
            <button
              style={{ width: '100px' }}
              className="btn btn-secondary"
              type="button"
              name=""
              id=""
              
              onClick= {() => {
                Navigation("/form3");
              }}
            >
              Button
            </button>
          </div>
          
        </div>
      </div>
    </>
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setcount((count) => count + 1);
  //   }, 1000)
  // });

  // return (
  //   <div>
  //     <h1>Count: {count}</h1>
  //     <button onClick={() => setcount(0)}>Reset</button>
  //   </div>
  // );


}



export default Apis;