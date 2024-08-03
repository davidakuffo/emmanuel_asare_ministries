"use client";
import React from "react";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    profession: "",
    partnerType: "",
    contributionAmount: "",
    contributionFrequency: "",
    paymentType: "",
    firstPaymentDate: "",
    signUpSource: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-sky-400 text-white p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Emmanuel Asare Ministries</h1>
          <button className="bg-amber-300 text-black px-4 py-2 rounded-[1rem]">
            Sign In
          </button>
        </div>
      </header>

      <main className="flex flex-col md:flex-row gap-6">
        <form onSubmit={handleSubmit} className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4">PARTNER REGISTRATION FORM</h2>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Add more form fields here */}

          <button
            type="submit"
            className="w-full bg-amber-300 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>

        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">MORE INFORMATION</h3>
            <p className="text-purple-700 font-semibold">
              EAM takes on three types of partners: Covenant, Ministry and
              Corporate Partners.
            </p>
            {/* Add partner type descriptions here */}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">DOWNLOADS</h3>
            <a href="#" className="text-blue-500 hover:underline">
              partnership information
            </a>
            <p>
              This document lays out the social transformation activities of EAM
              and explains the types of partnerships and their benefits.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationForm;
