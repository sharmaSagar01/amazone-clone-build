import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt='Banner'
				/>
				<div className='home__row'>
					<Product
						title='Product 1'
						price={29.99}
						image='https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg'
						rating={3}
					/>
					<Product />
				</div>
				<div className='home__row'>
					<Product />
					<Product />
					<Product />
				</div>
				<div className='home__row'>
					<Product />
				</div>
			</div>
		</div>
	);
}

export default Home;
