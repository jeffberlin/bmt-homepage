import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Features from './Features';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';

class Home extends Component {
	componentDidMount() {
		document.title = "BMT Micro - Global Digital Commerce Platform"
	}
	render() {
		return (
			<div className="body-content">
				<Header />
				<Banner />
				<Features />
				<Testimonials />
				<AboutSection />
			</div>
		);
	}
}

export default Home;
