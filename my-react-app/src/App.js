import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import './App.css';
import Header from './components/Header';


const App = () => {
    return (
        <div>
            <Header/>
            <Router>

<Routes>
    <Route path="/" element={<FlightSearchForm />} />
    <Route path="/results" element={<FlightResults />} />
</Routes>
</Router>
        </div>
        
    );
};

export default App;
