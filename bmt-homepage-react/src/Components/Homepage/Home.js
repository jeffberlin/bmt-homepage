import React from 'react';
import Header from './Header';
import Tag from './Tag';
import Features from './Features';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';

function Home() {
	return (
		<div className="body-content">
			<Header />
			<Tag />
			<Features />
			<Testimonials />
			<AboutSection />
		</div>
	);
}

export default Home;
