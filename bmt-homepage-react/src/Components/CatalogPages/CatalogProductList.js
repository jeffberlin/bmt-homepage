import React from 'react';
import products from './ProductSearchItems';

function CatalogProductList() {
  return (
    <div>
      <ul>
        {products.sort().map((product, index) => (
          <li key={index}><a href={product.url} target="_blank">{product.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogProductList;
