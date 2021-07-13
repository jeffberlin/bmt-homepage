import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FAQ() {
	return (
		<div className="body-content">
			<div className="wrapper">
				<h1>FAQ</h1>
			</div>
			<Container className="faq">
				<Row className="justify-content-center">
					<Col xl={12} lg={12} md={12} sm={12}>
						<p className="question">Question 1: “I read on your website that there are NO fees to use your service. The only thing you do is take a % of the profits when I sell something, correct? It won’t cost me anything extra to use your service?”</p>
						<blockquote className="answer">That is correct. There are no fees for our service. BMT Micro charges a % of the commission for each sale. If you never sell anything you do not owe anything.</blockquote>
						<p className="question">Question 2: “Is your organization all that we would need to work with, or will we need a merchant account or a ‘payment gateway’?”</p>
						<blockquote className="answer">You do not need any other companies to use our services. All orders are placed through BMT Micro’s merchant account using our payment gateway.</blockquote>
						<p className="question">Question 3: “I am an individual developer. Is my contact information available to customers?”</p>
						<blockquote className="answer">The contact information entered when signing up for your vendor account is used for payment purposes and it needs to be completed. Your customers are not given your contact information, only a support email or URL address.</blockquote>
						<p className="question">Question 4: “I tried to call with questions and was told to email. Why?”</p>
						<blockquote className="answer">In order to keep the phone lines open for customer purchases and inquiries, developer questions are answered via email. Most are answered within a few hours.</blockquote>
						<p className="question">Question 5: “Does BMT Micro supply a key generator for my product?”</p>
						<blockquote className="answer">
							We can integrate our system with your key generator or we can contact your key generator remotely via XML. We are integrated with a number of commercial key generators*:
							<br/>ExeShield<br/>WinLicense<br/>Armadillo Software/Passport<br/>*Please contact us for other options.
						</blockquote>
						<p className="question">Question 6: “I already have a Payoneer Card. Can I use my existing card to receive payments from BMT Micro?”</p>
						<blockquote className="answer">Yes, you can use the same card to receive funds from us. You will still need to log into your account with us and click the Payoneer link at the bottom of the home page (Get paid via Pre-paid Mastercard from Payoneer). This takes you to Payoneer with our information. On the Payoneer site, there is a link on the upper right hand side for this option, if you already have a card.</blockquote>
						<p className="question">Question 7: “How often do you pay developers?”</p>
						<blockquote className="answer">Payments are made on the 1st of each month for the previous month’s transactions. There is a 30 day hold on your first payment only. The 30 day hold is calculated from the date of your first sale, not from your signup date. If your first sale is within the last 5 days of the month, payment will be paid on the normal vendor payment date after a full month of sales has been reviewed. Check payments are not issued for less than $50.00, $35.00 for ACH or Payoneer and $300.00 for wire transfers.</blockquote>
						<p className="question">Question 8: “I live in another country. Will BMT Micro have trouble paying me?”</p>
						<blockquote className="answer">BMT Micro has developers worldwide. Most developers do not need an American bank to receive payment. International payments are available via PayPal, Payoneer pre-paid Mastercard and wire transfer. If being paid via wire transfer, please contact your bank to see if they will accept wire transfers from the US.</blockquote>
						<p className="question">Question 9: “Does BMT Micro support recurring billing/subscription products?”</p>
						<blockquote className="answer">Yes. Products can be set up as recurring billing/subscriptions where our system rebills the customer automatically, based on the frequency set in the product (monthly, quarterly, etc). Subscription products can be set up to allow for discounted subsequent billings, credits towards other products and/or reduced-price purchasing of other products.</blockquote>
						<p className="question">Question 10: “Does BMT Micro support dynamic or zero priced products?”</p>
						<blockquote className="answer">Yes. With our help, your product can be set up to accept a price range instead of a fixed price. Your shopping cart can then be set up with a selection box or input box for your customers to specify the price they want to pay. Our system will also allow you to set up free products for distribution, without any costs for processing the orders. This is very useful for upgrades and beta testing!</blockquote>
						<p className="question">Question 11: “How can I test my custom shopping cart?”</p>
						<blockquote className="answer">For your convenience, a test button is available in the secure vendors area. You can test products at any time.</blockquote>
						<p className="question">Question 12: “I’m already a vendor. Can I be an affiliate, too?”</p>
						<blockquote className="answer">Yes. Many BMT Micro developers are affiliates for another’s products. We can even set up your affiliate sales to be paid through your vendor account.</blockquote>
						<p className="question">Question 13: “Can I customize the emails sent to my customers?”</p>
						<blockquote className="answer">Yes. The product information email can be customized in the Developer’s Control Panel. The order receipt email is sent by our system and contains only the customer’s purchase information. There is no cross selling to your customers from our system.</blockquote>
						<p className="question">Question 14: “Why is the ‘License to’ field optional in the shopping cart? I need this for my key generator.”</p>
						<blockquote className="answer">Our system will fill this field with the customer’s first and last name when left blank or if the field is not present. Due to a number of customers entering wrong information in this field (e.g.: “same as above”, “me”, “my company”, etc.), some vendors opt to not include this field at all.</blockquote>
						<p className="question">Question 15: “Is the customer’s download password unique and secure?”</p>
						<blockquote className="answer">Yes. When a customer purchases your product, our system will generate a unique download link for your customer. For added security, this link will automatically be blocked if abuse is detected. This ensures your customers cannot share links or post them on the internet. The automatic expiration parameters can be controlled by you in the Developer’s Control Panel.</blockquote>
						<p className="question">Question 16: “Does your system support tracking codes?”</p>
						<blockquote className="answer">Yes. BMT Micro has been supporting tracking codes for Google, Overture, MSN, Yahoo and many others.</blockquote>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default FAQ;