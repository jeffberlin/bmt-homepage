import React from 'react';
import sewing from './SewingSearchItems';

function CatalogSewingList() {
  return (
    <div>
      <ul>
        {sewing.sort().map((sew, index) => (
          <li key={index}><a href={sew.url} target="_blank">{sew.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogSewingList;
