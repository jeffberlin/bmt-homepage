import React, { useState } from 'react';
import products from './SearchItems';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <Col xl={4} lg={4} md={8} sm={12}>
      <p className="back-btn">
        <Link to="/catalog">
          <i className="fas fa-arrow-left"></i>
          &nbsp;Back
        </Link>
      </p>
      <input
        className="search-input"
        type="text"
        placeholder="Search for product"
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <ul className="product-list">
        {data.map((d, i) => (
          <li key={i}><a href={d.url} target="_blank" rel="noreferrer">{d.name}</a></li>
        ))}
      </ul>
      {data.length === 0 && <p>No matches found! Please try again.</p>}
    </Col>
  );
}

export default CatalogSearch;
