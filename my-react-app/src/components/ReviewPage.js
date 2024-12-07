import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReviewPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { priceId } = location.state || {}; // Get priceId
    const [reviewDetails, setReviewDetails] = useState(null);

    useEffect(() => {
        const fetchReviewDetails = async () => {
            try {
                const response = await fetch('https://tripjack.com/fms/v1/review', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        apikey: '610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172',
                    },
                    body: JSON.stringify({ priceIds: [priceId] }),
                });

                const data = await response.json();
                console.log('Review Details:', data);
                setReviewDetails(data);
            } catch (error) {
                console.error('Error fetching review details:', error);
            }
        };

        if (priceId) fetchReviewDetails();
    }, [priceId]);

    if (!reviewDetails) return <div>Loading...</div>;

    const tripInfo = reviewDetails.tripInfos?.[0];
    const segment = tripInfo?.sI?.[0];
    const fareDetails = reviewDetails.totalPriceInfo?.totalFareDetail?.fC;

    return (
        <div>
            <h2>Flight Review</h2>
            {segment ? (
                <div>
                    <p><strong>Airline:</strong> {segment.fD?.aI?.name} ({segment.fD?.aI?.code})</p>
                    <p><strong>Flight Number:</strong> {segment.fD?.fN}</p>
                    <p><strong>From:</strong> {segment.da?.city} ({segment.da?.code})</p>
                    <p><strong>To:</strong> {segment.aa?.city} ({segment.aa?.code})</p>
                    <p><strong>Departure:</strong> {new Date(segment.dt).toLocaleString()}</p>
                    <p><strong>Arrival:</strong> {new Date(segment.at).toLocaleString()}</p>
                    <p><strong>Total Fare:</strong> ₹{fareDetails?.TF}</p>
                    <p><strong>Base Fare:</strong> ₹{fareDetails?.BF}</p>
                    <p><strong>Taxes:</strong> ₹{fareDetails?.TAF}</p>
                </div>
            ) : (
                <p>No flight segment details available.</p>
            )}
            <button
                onClick={() => navigate('/book', { state: { bookingId: reviewDetails.bookingId } })}
            >
                Proceed to Booking
            </button>
        </div>
    );
};

export default ReviewPage;
