import React, { useState, useEffect } from 'react';

function ParentDash() {
  const [childData, setChildData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://teachmeapi.onrender.com/users')
      .then(response => response.json())
      .then(data => setChildData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Parent Dashboard</h2>
      <h3>My Children</h3>
      <ul>
        {childData.map(child => (
          <li key={child.id}>
            <h4>{child.name}</h4>
            <p>Age: {child.age}</p>
            <p>Grade: {child.grade}</p>
          </li>
        ))}
      </ul>
      {/* Add more components or sections as needed */}
    </div>
  );
}

export default ParentDash;
