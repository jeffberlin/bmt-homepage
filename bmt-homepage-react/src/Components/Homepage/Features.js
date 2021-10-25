import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Features() {

	return (
		<>
			<Container className="features">
				<Row className="justify-content-center" style={{ marginBottom: '2.5rem' }}>
					<Col lg={4} md={6} sm={12} className="text-center">
						<i className="fas fa-credit-card"></i>
						<h5>Multiple Payment Options</h5>
						<p style={{ marginBottom: '0' }}>We offer multiple payment options including over ten different credit cards, check or money orders, PayPal, paysafecards, Amazon payments, BitPay, wire transfers and Sofort Instant Bank transfers.</p>
					</Col>
					<Col lg={4} md={6} sm={12} className="text-center">
						<i className="fas fa-lock"></i>
						<h5>Reliable Fraud Detection</h5>
						<p style={{ marginBottom: '0' }}>Our advanced, proprietary fraud detection system is state of the art and effective in preventing almost all fraudulent order attempts. Our system is designed to keep you and your customers safe, without the need for intrusive phone calls to your customers or lengthy reviews of your orders.</p>
					</Col>
					<Col lg={4} md={6} sm={12} className="text-center">
						<i className="fas fa-globe-americas"></i>
						<h5>Localization & Languages</h5>
						<p style={{ marginBottom: '0' }}>Need your order pages in German, French, Spanish, or other languages? We can customize your order forms for any language you may need. Our carts use UTF-8 and support complete localization.</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col lg={4} md={6} sm={12} className="text-center">
						<i className="fas fa-shopping-cart"></i>
						<h5>Custom Shopping Carts</h5>
						<p style={{ marginBottom: '0' }}>BMT Micro’s proprietary shopping cart system is versatile and robust. There is no need to purchase an expensive shopping cart system. Our experienced development team will create a customized order form to match your own website design at no additional cost!</p>
					</Col>
					<Col lg={4} md={6} sm={12} className="text-center">
						<i className="fas fa-shield-alt"></i>
						<h5>PCI Compliance & Secure Certificates</h5>
						<p style={{ marginBottom: '0' }}>We adhere to all Payment Card Industry Data Security Standards (PCI DSS) so you can concentrate on your products and customers knowing their information is safe and secure. Our servers are also fully secured and host all shopping carts using the highest encryption standards available.</p>
					</Col>
					<Col lg={4} md={6} sm={12} className="text-center">
						<i className="fas fa-comment"></i>
						<h5>Customer Support</h5>
						<p style={{ marginBottom: '0' }}>Our customer service staff has the experience and know-how to assist your customers in a friendly and professional manner. Our focus has always been to provide customers with the best possible service, ensuring your and our integrity.</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Features;
