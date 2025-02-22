import React from 'react';
import '../styles/HotelSlider.css'; 

const HotelSlider = () => {
  const hotels = [
    {
      name: "Holiday Inn Bengaluru Racecourse",
      location: "Gandhi Nagar",
      rating: 5,
      price: "₹7,033",
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201711031722411846-a21d2dbc9fd411ea80e90242ac110002.jpg?&downsize=583:388&output-format=jpg",
    },
    {
      name: "Keys Select by Lemon Tree Hotels, Whitefield",
      location: "Seetharampalya",
      rating: 3,
      price: "₹2,074",
      image: "https://r1imghtlak.mmtcdn.com/6c70f4c43cb111e8aa500a6d3d4ffdae.jpg?&downsize=583:388&crop=583:388;115,0&output-format=jpg",
    },
    {
      name: "Taj Yeshwantpur, Bengaluru",
      location: "Phase 1",
      rating: 5,
      price: "₹8,100",
      image: "https://r1imghtlak.mmtcdn.com/2d441658237711e88b5b025f77df004f.jpg?&downsize=583:388&crop=583:388;86,0&output-format=jpg",
    },
    {
      name: "The Chancery Pavilion",
      location: "Ashok Nagar",
      rating: 5,
      price: "₹4,863",
      image: "https://r1imghtlak.mmtcdn.com/8b1e40f4fc3611e78b040224510f5e5b.jpg?&downsize=583:388&crop=583:388;0,74&output-format=jpg",
    },
    {
      name: "ESSOTTO RECREATION HUB",
      location: "KIADB Export Promotion Industrial Area",
      rating: 4,
      price: "₹302",
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312191545321561-df254a48af7311eeba440a58a9feac02.jpg?&downsize=583:388&output-format=jpg",
    }
  ];

  return (
    <div className="stayOffr appendBottom20" id="HotelXCardWrapper">
      <div className="stayOffr__header">
        <div className="flexOne">
          <h3 className="stayOffr__heading">For your stay in Bangalore</h3>
          <h4 className="stayOffr__subheading">Sat, 23 Nov 24 - Tue, 26 Nov 24</h4>
        </div>
        <div className="stayOffr__headerRight">
          <a data-cy="stayOffr__cta" className="stayOffr__cta">View All<span className="landingSprite blueArrowIcon appendLeft5"></span></a>
        </div>
      </div>
      <div className="stayOffr__list">
        <div className="slick-slider slick-initialized">
          <button type="button" className="slick-arrow slick-prev"> Previous</button>
          <div className="slick-list">
            <div className="slick-track">
              {hotels.map((hotel, index) => (
                <div key={index} className="slick-slide">
                  <div className="stayOffr__list--item">
                    <a data-cy={`hotelCard_cta${index}`} className="hotelCard_cta">
                      <div className="stayOffr__list--itemImg">
                        <img src={hotel.image} alt={hotel.name} />
                      </div>
                      <div className="stayOffr__list--itemDesc">
                        <div className="stayOffr__list--itemDescLft">
                          <p className="stayOffr__list--itemTitle">{hotel.name}</p>
                          <p className="stayOffr__list--itemSubTitle">{hotel.location}</p>
                        </div>
                        <div className="stayOffr__list--itemDescRht">
                          <p className="stayOffr__price">{hotel.price}</p>
                          <p className="stayOffr__pernight">per night</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button type="button" className="slick-arrow slick-next"> Next</button>
        </div>
      </div>
    </div>
  );
};

export default HotelSlider;
