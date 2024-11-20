import React, { useState } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import './App.css';

const App = () => {
    const [flightResults, setFlightResults] = useState([]);

    const handleSearchSubmit = (results) => {
        console.log('Flight Search Results:', results);
        setFlightResults(results.searchResult?.tripInfos?.ONWARD || []);
    };

    return (
        <div>
            <h1>Flight Search App</h1>
            <FlightSearchForm onSubmit={handleSearchSubmit} />
            {flightResults.length > 0 && <FlightResults results={flightResults} />}
        </div>
    );
};

export default App;
