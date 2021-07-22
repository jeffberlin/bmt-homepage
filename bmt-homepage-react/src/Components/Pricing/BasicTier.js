import React from 'react';

function BasicTier() {
  return (
    <div className="tier">
      <div className="tier-header text-center">
        <h4>Basic Tier</h4>
      </div>
      <div className="tier-rate text-center">
        <p>8.9% flat or 5.9% + $1</p>
      </div>
      <div className="tier-text text-center">
        <p>All orders online (no phone support, demo hosting, or mail/fax orders)</p>
        <hr />
      </div>
    </div>
  );
}

export default BasicTier;
