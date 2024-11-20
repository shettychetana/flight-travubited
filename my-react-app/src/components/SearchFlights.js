import React, { useState } from 'react';
import { searchFlights } from '../api/tripjack';

const SearchFlights = ({ onSearchResults }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const payload = {
        searchQuery: {
            cabinClass: "ECONOMY",
            paxInfo: {
                ADULT: "1",
                CHILD: "0",
                INFANT: "0",
            },
            routeInfos: [
                {
                    fromCityOrAirport: {
                        code: "DEL",
                    },
                    toCityOrAirport: {
                        code: "MAA",
                    },
                    travelDate: "2024-12-19",
                },
            ],
            searchModifiers: {
                isDirectFlight: true,
                isConnectingFlight: false,
            },
        },
    };

    const handleSearch = async () => {
        setLoading(true);
        setError(null);

        try {
            const results = await searchFlights(payload);
            onSearchResults(results.searchResult?.tripInfos?.ONWARD || []);
        } catch (err) {
            setError('Error fetching flight data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Flight Search</h2>
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search Flights'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SearchFlights;
