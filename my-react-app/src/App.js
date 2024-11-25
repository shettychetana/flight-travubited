import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import './App.css';
import Header from './components/Header';
import SwitchingTabs from "./components/SwitchingTabs";
// import HotelSlider from './components/HotelSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import CarseoulCard from './components/CarseoulCard';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Reviews from './components/Reviews';
import BlogSection from './components/BlogSection';
import TravelPackages from './components/TravelPackages';
import PopularDestinations from './components/PopularDestinations';
import GlobalDestinations from './components/GlobalDestinations';
import LogoCarousel from './components/LogoCarousel';



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
{/* <HotelSlider/> */}
{/* <CarseoulCard/>
<SwitchingTabs/> */}
<LogoCarousel/>
<GlobalDestinations/>
<PopularDestinations/>
<TravelPackages/>
<BlogSection/>
<Reviews/>
<Statistics/>
<Footer/>
        </div>
        
    );
};

export default App;
