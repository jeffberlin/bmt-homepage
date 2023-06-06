import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function AddProducts() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://secure.bmtmicro.com/bmt_cart.js';
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://secure.bmtmicro.com/bmt_cart.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const createCart = (productid) => {
    const cart = window.bmt_createCart(249);
    return cart;
  };

  const checkout = (productid) => {
    const cart = createCart();
    cart.addProduct(productid);
    cart.showCart(false);
  };

  const handleShowCart = () => {
    window.bmt_showcart();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Purchase
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => checkout(24902, 249)}>$12.50 (Student membership)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24903, 249)}>$12.50 (Senior membership)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24900, 249)}>$30.00 (Individual membership)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24915, 249)}>$25.00 (Bronze sponsorship 1 month)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24910, 249)}>$50.00 (Silver sponsorship 1 month)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24901, 249)}>$100.00 (Corporate membership)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24905, 249)}>$100.00 (Gold sponsorship 1 month)</Dropdown.Item>
        <Dropdown.Item onClick={() => checkout(24904, 249)}>$200.00 (Platinum sponsorship per month)</Dropdown.Item>
        <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleShowCart()}>View Cart</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AddProducts;
