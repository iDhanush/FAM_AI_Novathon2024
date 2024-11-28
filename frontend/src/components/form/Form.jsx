import React, { useState } from "react";
import "./Form.scss";

import { motion } from "motion/react";
const Form = ({popup,setPopup}) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://your-backend-endpoint.com/api/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Form submitted successfully!");
        console.log(result);
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div className="form-page">
      <div className="close-btn"
      onClick={()=>setPopup(!popup)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={67}
          height={67}
          fill="none"
        >
          <rect width={66} height={66} x={0.5} y={0.5} fill="#fff" rx={33} />
          <rect
            width={66}
            height={66}
            x={0.5}
            y={0.5}
            stroke="#E3E3E5"
            rx={33}
          />
          <path
            fill="#4F4F4F"
            d="m34 31.5 8-8 2 1.833-8.167 8.167L44 41.667 41.667 44 33.5 35.833 25.333 44 23 41.667l8.167-8.167L23 25.333 25.333 23z"
          />
        </svg>
      </div>
      <motion.div
        className="form-wrapper"
        initial={{ scale: 0, rotate: "10deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        transition={{
          duration: 0.3,
          type: "spring",
        }}
      >
        <h2>Add New Member</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="field">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="field">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Blood Group */}
          <div className="field">
            <label>Blood Group:</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Form;
