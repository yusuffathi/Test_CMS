import "./App.css";
import './bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customers from "./components/CustomersList";
// import CustomerForm from "./components/CustomerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customers />} />
      </Routes>
    </Router>
  );
}

export default App;
