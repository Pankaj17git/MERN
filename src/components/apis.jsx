import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";


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
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="number"
            id="password"
            name="password"
            value={data.password}
            onChange={(e) => setData({...data, password: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={data.dob}
            onChange={(e) => setData({ ...data, dob: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <button type="submit" >Submit</button>
      </form>

      <div>
        <div className="d-grid gap-2">
          <button
            type="button"
            name=""
            id=""
            className="btn btn-primary"
            onClick= {() => {
              Navigation("/form3");
            }}
          >
            Button
          </button>
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