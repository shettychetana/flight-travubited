import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import BookingPage from './components/BookingPage'; // Import your BookingPage component
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
// import Reviews from './components/Reviews';
import BlogSection from './components/BlogSection';
import TravelPackages from './components/TravelPackages';
import PopularDestinations from './components/PopularDestinations';
import GlobalDestinations from './components/GlobalDestinations';
import LogoCarousel from './components/LogoCarousel';
import TravelSection from './components/TravelSection';
import TravelSection1 from './components/TravelSection1';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewPage from './components/ReviewPage';
import Formofsecond from './components/Formofsecond';
import FlightList from './components/FlightList';
// Helper component to conditionally wrap non-routing components
const Layout = ({ children }) => {
    const location = useLocation();
    const hideLayoutOnPaths = ['/results', '/booking']; // Add /booking to hide layout on BookingPage

    const shouldHideLayout = hideLayoutOnPaths.includes(location.pathname);

    return (
        <>
            {!shouldHideLayout && <Header />}
            {children}
            
            {!shouldHideLayout && (
                <>
                    <LogoCarousel />
                    <TravelSection />
                    <TravelSection1 />
                    <GlobalDestinations />
                    <PopularDestinations />
                    <TravelPackages />
                    <BlogSection />
 {/* <Reviews /> */}
                    <Statistics />
                   
                </>
            )}
             <Footer />
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
            
            <Route path="/results" element={<FlightResults />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path='/flight-list' element={<FlightList />} />

                {/* Routes with Layout */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Formofsecond />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
