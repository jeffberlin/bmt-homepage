import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function POPolicies(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          BMT Micro’s Purchase Order Policies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          BMT Micro prides ourselves on exceptional customer service in every aspect. One of the most unique aspects of our company is how we process purchase orders for corporate clients, government agencies, or others with specific invoicing needs. We believe that every vendor we work with should be able to process purchase orders in a way that best benefits them and their customers. We accept all orders over $250 USD with NET30 payment terms, and are happy to develop a process that works best for each specific business. If you have any questions or concerns about a purchase, you never have to worry about reaching a bot rather than a human. BMT Micro values our relationship with our vendors, and prefer to resolve issues through a representative to minimize frustrations and find the proper solution as quickly as possible. We also have a unique approach to processing tax exempt orders that allows the process to run smoothly and quickly. For our European customers, if you are VAT exempt you can simply fill out your VAT exemption number on the form to have the tax portion subtracted from the total. For United States customers, send in your proof of exemption and we will remove the tax portion. This eliminates the need for a refund, so you get to keep your money rather than going through a waiting period to be reimbursed. If you would like information about how you can work with BMT please contact <a href="mailto:vendors@bmtmicro.com">vendors@bmtmicro.com</a>.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default POPolicies;