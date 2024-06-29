// src/Breweries.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Data.css';

const Data = () => {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('by_name');

  const fetchBreweries = (query, type) => {
    setLoading(true);
    const url = `https://api.openbrewerydb.org/breweries?${type}=${query}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBreweries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      fetchBreweries(searchTerm, searchType);
    }
  };

  return (
    <div>
      <h1>Breweries</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="by_name">Name</option>
          <option value="by_city">City</option>
          <option value="by_type">Type</option>
        </select>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && searchTerm && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {breweries.map((brewery) => (
              <tr key={brewery.id}>
                <td>
                  <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
                </td>
                <td>{brewery.city}</td>
                <td>{brewery.state}</td>
                <td>{brewery.brewery_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default Data;