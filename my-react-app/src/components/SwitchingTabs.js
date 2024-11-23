import React, { useState } from "react";
import "../styles/SwitchingTabs.css";

const SwitchingTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    // Sample data for cards with images
    const homeCards = [
        {
            id: 1,
            title: "Home Card 1",
            description: "This is the first card in Home.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            title: "Home Card 2",
            description: "This is the second card in Home.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "Home Card 3",
            description: "This is the third card in Home.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "Home Card 4",
            description: "This is the fourth card in Home.",
            image: "https://via.placeholder.com/300",
        },
    ];

    const aboutCards = [
        {
            id: 1,
            title: "About Card 1",
            description: "Learn about us here.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            title: "About Card 2",
            description: "This card shares more details.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "About Card 3",
            description: "Discover more about our team.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "About Card 4",
            description: "This is additional information.",
            image: "https://via.placeholder.com/300",
        },
    ];

    const contactCards = [
        {
            id: 1,
            title: "Contact Card 1",
            description: "Reach out to us anytime.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            title: "Contact Card 2",
            description: "We are here to help you.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "Contact Card 3",
            description: "Feel free to get in touch.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "Contact Card 4",
            description: "Contact us for more info.",
            image: "https://via.placeholder.com/300",
        },
    ];

    // Function to render cards
    const renderCards = (cards) => (
        <div className="grid-container">
            {cards.map((card) => (
                <div className="grid-item" key={card.id}>
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="tabs-container">
            {/* Tab Buttons */}
            <div className="tabs">
                <button
                    className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab1")}
                >
                    Home
                </button>
                <button
                    className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab2")}
                >
                    About
                </button>
                <button
                    className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab3")}
                >
                    Contact
                </button>
            </div>

            {/* Tab Content with Cards */}
            <div className="tab-content">
                {activeTab === "tab1" && renderCards(homeCards)}
                {activeTab === "tab2" && renderCards(aboutCards)}
                {activeTab === "tab3" && renderCards(contactCards)}
            </div>
        </div>
    );
};

export default SwitchingTabs;
