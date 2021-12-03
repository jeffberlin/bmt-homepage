import React, { Component, useState } from 'react';
import products from './SearchItems';

function CatalogSearch() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(products);

  //excludes URL's from search query
  const excludeURL = ["url"];

  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercaseValue = value.toLowerCase().trim();
    if (lowercaseValue === "") setData(products);
    else {
      const filteredData = products.filter(item => {
        return Object.keys(item).some(key =>
          excludeURL.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercaseValue)
        );
      });
      setData(filteredData);
    }
  }

  const sortProducts = products.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0
  })

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search for product"
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <ul>
        {data.map((d, i) => (
          <li key={i}><a href={d.url} target="_blank" rel="noreferrer">{d.name}</a></li>
        ))}
      </ul>
      {data.length === 0 && <p>No matches found! Please try again.</p>}
    </div>
  );
}

export default CatalogSearch;
