// import React from "react";
// import "../styles/Statistics.css";

// const Statistics = () => {
//   const stats = [
//     { icon: "hotel", number: "1000+", label: "Hotel" },
//     { icon: "bed", number: "4500+", label: "Rooms Available" },
//     { icon: "globe", number: "281+", label: "Countries" },
//     { icon: "users", number: "8000+", label: "Guests" },
//   ];

//   return (
//     <div className="statistics-container">
//       {stats.map((stat, index) => (
//         <div className="stat-card" key={index}>
//           <div className="icon-container">
//             <i className={`fas fa-${stat.icon}`}></i>
//           </div>
//           <h3>{stat.number}</h3>
//           <p>{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Statistics;
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Statistics.css";

const Statistics = () => {
  const stats = [
    { icon: "hotel", number: "1000+", label: "Hotel" },
    { icon: "bed", number: "4500+", label: "Rooms Available" },
    { icon: "globe", number: "281+", label: "Countries" },
    { icon: "users", number: "8000+", label: "Guests" },
  ];

  return (
    <div className="statistics-container">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="icon-container">
            <i className={`fas fa-${stat.icon}`}></i>
          </div>
          <h3>{stat.number}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
