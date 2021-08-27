import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Features from './Features';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';

function Home() {
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

export default Home;
