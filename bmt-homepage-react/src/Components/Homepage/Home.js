import React from 'react';
import Navigation from '../Navigation';
import Header from './Header';
import Tag from './Tag';
import Features from './Features';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import Footer from '../Footer';

function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<Tag />
			<Features />
			<Testimonials />
			<AboutSection />
			<Footer />
		</>
	);
}

export default Home;
