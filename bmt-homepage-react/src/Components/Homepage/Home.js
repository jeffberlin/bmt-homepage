import React, { useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import Features from './Features';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';

function Home() {
	useEffect(() => {
		document.title = "BMT Micro - Global Digital Commerce Platform"
	})
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
