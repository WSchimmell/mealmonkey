import React from 'react';
import Shop from './Shop'
const TopSection = ({ name }) => {
    return (
        <>
        <h1>Good Morning {name}!</h1><Shop />
        <p>Delivering to</p>
        <h2>Current Location</h2>
        </>
      );
}
 
export default TopSection;