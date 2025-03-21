import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBone, FaPills, FaCat, FaSyringe, FaDog, FaSprayCan, FaTrashAlt, FaCapsules, FaFish, FaBandAid, FaDove, FaQuestion, FaHeadphones } from 'react-icons/fa';

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const getImage = (itemName) => {
    itemName = itemName.toLowerCase();

    if (itemName.includes('dog food')) return <FaBone />;
    if (itemName.includes('paracetamol')) return <FaPills />;
    if (itemName.includes('cat toy')) return <FaCat />;
    if (itemName.includes('antibiotic')) return <FaSyringe />;
    if (itemName.includes('dog leash')) return <FaDog />;
    if (itemName.includes('flea treatment')) return <FaSprayCan />;
    if (itemName.includes('cat litter')) return <FaTrashAlt />;
    if (itemName.includes('vitamin supplement')) return <FaCapsules />;
    if (itemName.includes('fish tank')) return <FaFish />;
    if (itemName.includes('wound cream')) return <FaBandAid />;
    if (itemName.includes('bird cage')) return <FaDove />;
    if (itemName.includes('ear drops')) return <FaHeadphones />; // Use FaHeadphones instead of FaEarListen

    return <FaQuestion />; // Default icon
  };

  return (
    <div className="container mt-4">
      <h1>Pet Store Dashboard</h1>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="text-center" style={{fontSize: '5em', marginTop: '10px'}}>
                {getImage(item.name)}
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;