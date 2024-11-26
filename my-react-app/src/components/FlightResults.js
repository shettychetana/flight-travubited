import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FlightResults.css';
import FilterSidebar from '../components/FilterSidebar';

const FlightResults = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([
        // Example flight data
        {
            id: 1,
            airline: 'Indigo',
            departureTime: '2024-11-26T08:00',
            arrivalTime: '2024-11-26T12:00',
            duration: '4h',
            price: 5000,
            from: 'Delhi',
            to: 'Mumbai',
        },
        {
            id: 2,
            airline: 'Air India',
            departureTime: '2024-11-26T09:00',
            arrivalTime: '2024-11-26T13:00',
            duration: '4h',
            price: 6000,
            from: 'Delhi',
            to: 'Chennai',
        },
    ]);

    const [filters, setFilters] = useState({
        airline: '',
        minPrice: 0,
        maxPrice: 10000,
    });

    const filteredResults = useMemo(() => {
        return results.filter(
            (flight) =>
                (!filters.airline || flight.airline === filters.airline) &&
                flight.price >= filters.minPrice &&
                flight.price <= filters.maxPrice
        );
    }, [filters, results]);

    const handleBookNow = (flight) => {
        navigate('/booking', { state: { flight } });
    };

    return (
        <div className="flight-results-container">
            <FilterSidebar filters={filters} setFilters={setFilters} />
            <div className="flight-list">
                {filteredResults.length ? (
                    filteredResults.map((flight) => (
                        <div key={flight.id} className="flight-card">
                            <div className="flight-details">
                                <h3>{flight.airline}</h3>
                                <p>From: {flight.from}</p>
                                <p>To: {flight.to}</p>
                                <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
                                <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
                                <p>Price: ₹{flight.price}</p>
                            </div>
                            <button
                                className="book-now-btn"
                                onClick={() => handleBookNow(flight)}
                            >
                                Book Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No flights found.</p>
                )}
            </div>
        </div>
    );
};

export default FlightResults;
