// src/pages/FlightSearchPage.js
import React, { useState } from 'react';
import FlightSearchForm from '../components/FlightSearchForm'; // Adjust the path based on your structure
import FlightResults from '../components/FlightResults'; // Adjust the path based on your structure

const FlightSearchPage = () => {
    const [flightResults, setFlightResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearchSubmit = async (formData) => {
        setLoading(true);
        try {
            // Replace with your actual API endpoint
            const response = await fetch('https://api.example.com/flights', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setFlightResults(data.results); // Assuming the API response contains a `results` field
        } catch (error) {
            console.error('Error fetching flight data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <FlightSearchForm onSubmit={handleSearchSubmit} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <FlightResults results={flightResults} />
            )}
        </div>
    );
};

export default FlightSearchPage;
