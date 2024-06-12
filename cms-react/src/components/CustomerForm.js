import React, { useState } from "react";
import { addCustomer, updateCustomer } from "../actions/api"; // Import API functions

const CustomerForm = ({ initialCustomer, onSubmit }) => {
  const [firstName, setFirstName] = useState(initialCustomer?.firstName || "");
  const [lastName, setLastName] = useState(initialCustomer?.lastName || "");
  const [email, setEmail] = useState(initialCustomer?.email || "");
  const [phone, setPhone] = useState(initialCustomer?.phone || "");
  const [address, setAddress] = useState(initialCustomer?.address || "");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [error, setError] = useState(null); // Store any errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to show loading indicator
    setError(null); // Clear any previous errors

    try {
      const customerData = {
        firstName,
        lastName,
        email,
        phone,
        address,
      };
      if (initialCustomer) {
        await updateCustomer(initialCustomer.id, customerData);
      } else {
        await addCustomer(customerData);
      }

      setIsSubmitting(false); // Reset submitting state
      onSubmit(); // Call the parent component's function for success handling (e.g., clear form, refetch data)
    } catch (error) {
      setIsSubmitting(false); // Reset submitting state
      setError(error.message || "An error occurred. Please try again later."); // Handle errors gracefully
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="col-md-5 col-11 row m-auto mt-5">
        <h2 className=" mb-2">Add Customer</h2>
        <div className="form-group col-md-6">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group col-md-10">
          <button
            type="submit"
            className="btn btn-dark mt-3  col-8"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : initialCustomer
              ? "Update Customer"
              : "Add Customer"}
          </button>
        </div>
        {error && <p className="text-danger">Samething went wrong!</p>}
      </form>
    </>
  );
};

export default CustomerForm;
