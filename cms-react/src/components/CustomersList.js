import React, { useState, useEffect } from "react";
import { getCustomers } from "../actions/api";
import CustomerForm from "./CustomerForm";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="row gap-3"
        style={{ "--bs-gutter-x": "0rem", "--bs-gutter-y": "0" }}
      >
        <CustomerForm />
        {isLoading && <p>Loading Customers...</p>}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && !error && (
          <div className="col-md-6 col-11 m-auto">
            <h2 className=" mb-2">Customers List</h2>
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr>
                      <td>{customer.firstName}</td>
                      <td>{customer.lastName}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.address}</td>

                      <td>
                        <Link href="#" class="btn btn-sm btn-primary">
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomersList;
