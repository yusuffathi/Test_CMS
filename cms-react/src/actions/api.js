
import axios from 'axios';

const baseUrl = 'https://localhost:44372/api/Customers'; // Replace with your actual API base URL

export const getCustomers = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const getCustomerById = async (id) => {
    const url = `<span class="math-inline">\{baseUrl\}/</span>{id}`;
    const response = await axios.get(url);
    return response.data;
};

export const addCustomer = async (customer) => {
    const response = await axios.post(baseUrl, customer);
    return response.data;
};

export const updateCustomer = async (id, customer) => {
    const url = `<span class="math-inline">\{baseUrl\}/</span>{id}`;
    const response = await axios.put(url, customer);
    return response.data;
};

export const deleteCustomer = async (id) => {
    const url = `<span class="math-inline">\{baseUrl\}/</span>{id}`;
    await axios.delete(url);
};
