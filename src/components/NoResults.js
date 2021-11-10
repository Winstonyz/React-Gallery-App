import React from 'react';

//component for no search results
const NoResults = (props) => {
  return (
    <li className = "not-found">
      <h3>No Results</h3>
      <p>Sorry, there are no results. Please try with other key words!</p>
    </li>
  )
}

export default NoResults;