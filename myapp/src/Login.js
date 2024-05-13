import React from 'react';
import { useNavigate } from 'react-router-dom';
import HouseA from './HouseA.png';
import HouseB from './HouseB.jpg';
import HouseC from './House C.jpeg';
import HouseD from './houseD.jpg';
import HouseE from './HouseE.jpg';
import HouseF from './HouseF.png';
import HouseG from './HouseG.jpg';
import HouseH from './HouseH.jpg';
import HouseI from './HouseI.jpeg';
import HouseJ from './HouseJ.webp';// Import HouseA.png from your file structure
import './Login.css'; // Import CSS file for styling

const houses = [
  {
    id: 1,
    name: 'House A',
    image: HouseA, // Use the imported image directly
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$1000/month'
  },
  {
    id: 2,
    name: 'House B',
    image: HouseB, // Placeholder for HouseB image
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$1200/month'
  },
  // Add more house objects as needed
  {
    id: 3,
    name: 'House C',
    image: HouseC,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '$1500/month'
  },
  {
    id: 4,
    name: 'House D',
    image: HouseD,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: '$1800/month'
  },
  {
    id: 5,
    name: 'House E',
    image: HouseE,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$2000/month'
  },
  {
    id: 6,
    name: 'House F',
    image: HouseF,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$1000/month'
  },
  {
    id: 7,
    name: 'House G',
    image: HouseG,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$1200/month'
  },
  {
    id: 8,
    name: 'House H',
    image: HouseH,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '$1500/month'
  },
  {
    id: 9,
    name: 'House I',
    image: HouseI,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: '$1800/month'
  },
  {
    id: 10,
    name: 'House J',
    image: HouseJ,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$2000/month'
  }
];

const Login = () => {

  const navigate = useNavigate();
  const handleFavorite = (houseId) => {
    // Logic to add house to favorites
    navigate('/LoginForm')
  };

  const handleBook = (houseId) => {
    // Logic to book the house
    navigate('/LoginForm')
  };

  const hanleLOGIN = () =>{
    navigate('/LoginForm')
  }
  const handleSIGNUP  = () =>{
    navigate('/Signup')
  }

  return (
    <div className="login-container">
      <div className="header">
        <div className="project-name">easystay</div>
        <div className="auth-buttons">
          <button className="login-button" onClick={hanleLOGIN}>Login</button>
          <button className="signup-button" onClick={handleSIGNUP}>Signup</button>
        </div>
      </div>
      <div className="main-body">
        {houses.map((house) => (
          <div key={house.id} className="house-card">
            <img src={house.image} alt={house.name} className="house-image" />
            <div className="house-details">
              <h3>{house.name}</h3>
              <p>{house.description}</p>
              <p>Price: {house.price}</p>
              <button onClick={() => handleFavorite(house.id)}>Add to Favorites</button>
              <button onClick={() => handleBook(house.id)}>Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
