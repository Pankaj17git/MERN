import React, { useState } from "react";
import '../components/styles/form1.css'
import Header from "../components/header";



function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    profilePhoto: null,
    skills: [],
  });

  // This function updates the state whenever the input name=""  changes
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Optional: handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", formData);
  };



  return (
    <>
      <Header/>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>

          <div className="fields">
            <label htmlFor="name">First Name:</label>
            <input name="name"  type="text" id="name" className="js-name" placeholder="Name" value={formData.name} 
              onChange={handleChange}  required />
          </div>
          <div className="fields">
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName"  type="text" id="lastName" className="js-last-name" placeholder="Optional" value={formData.lastName} 
              onChange={handleChange}/>
          </div>

          {/* <div className="fields" style={{ marginBottom: "20px" }}>
            <label htmlFor="dob" style={{ display: "inline-block" }}>Date-of-Birth:</label>
            <input name="dob"  type="date" id="dob" className="js-dob" placeholder="Date of Birth" required value={formData.dob} 
              onChange={handleChange}/>
          </div>*/}

          <div className="details-container">
            {/* <div className="fields">
              <label htmlFor="phone">Phone:</label>
              <input name="phone"  type="tel" id="phone" className="js-phone" placeholder="Phone Number" required value={formData.phone} 
              onChange={handleChange} />
            </div>  */}

            <div className="fields">
              <label htmlFor="email">Email:</label>
              <input name="email"  type="email" id="email" className="js-email" placeholder="Email" required value={formData.email}
              onChange={handleChange}/>
            </div>

            {/* <div className="fields">
              <label htmlFor="country">Country:</label>
              <select id="country" className="js-country" required defaultValue="" onChange={handleChange} value={formData.country}>
                <option value="" disabled>-Select Country-</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
                <option value="Africa">Africa</option>
              </select>
            </div>

            <div className="fields">
              <label htmlFor="state">State:</label>
              <select id="state" className="js-state" required defaultValue="" onChange={handleChange} value={formData.state}>
                <option value="" disabled>-- Select State --</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>

            <div className="fields">
              <label htmlFor="city">City:</label>
              <select id="city" className="js-city" required defaultValue="" onChange={handleChange} value={formData.city}>
                <option value="" disabled>-- Select City --</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div> */}

            <div className="fields">
              <label htmlFor="pincode">Pincode:</label>
              <input name="pincode"  type="text" id="pincode" className="js-pincode" placeholder="Pincode" required onChange={handleChange} value={formData.pincode} />
            </div>
          </div>

          <div className="fields" style={{ marginBottom: "10px" }}>
            <label htmlFor="profilePhoto">Profile Photo:</label>
            <input name="profilePhoto"  type="file" id="profilePhoto" className="profilePhoto js-profilePhoto" accept="image/*" />
          </div>

          {/* <div className="skills-container">
            <div>
              <label>Skills:</label>
              <div className="checkbox-container">
                <label><input name="html"  type="checkbox" className="js-skill" value="HTML"/> HTML</label>
                <label><input name="css"  type="checkbox" className="js-skill" value="CSS" /> CSS</label>
                <label><input name=""  type="checkbox" className="js-skill" value="JavaScript" /> JavaScript</label>
                <label><input name=""  type="checkbox" className="js-skill" value="Python" /> Python</label>
                <label><input name=""  type="checkbox" className="js-skill" value="Java" /> Java</label>
              </div>
            </div>

            <div>
              <label>Gender:</label>
              <div className="radio-container">
                <label><input name=""  type="radio" name="gender" className="js-gender" value="male" /> Male</label>
                <label><input name=""  type="radio" name="gender" className="js-gender" value="female" /> Female</label>
              </div>
            </div>
          </div> */}

          <div>
            <button type="submit" className="js-submitButton" onClick={handleSubmit}>Submit</button>
            <button type="reset" className="reset">Reset</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default UserForm;