import React, { useState, useEffect } from 'react';
import Search from './Search';
import { BsSearch } from 'react-icons/bs';
import { useGlobalContext } from '../context';
const Navbar = () => {
	const { userInput, setUserInput } = useGlobalContext();
	const [mobileWidth, setMobileWidth] = useState(true)
	const submitHandler = (e) => {
		e.preventDefault();
	};

	// const event = window.addEventListener("resize", () => {
	// 	document.querySelector('.search-form-nav').style.display = 'none';
	// 	document.querySelector('.nav-list').style.display = 'none';
	// 	setMobileWidth(true);
	// })

	useEffect(() => {
		
	}, [window.innerWidth])
	
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			document.querySelector('.navbar').style.opacity = 0.859;
			document.querySelector('.navbar').style.background = '#fff';
			document.querySelector('.nav-brand-span').style.color = 'black';
			document.querySelector('.nav-brand-span').style.fontSize = '1.2rem';
			document.querySelector('.navbar').style.justifyContent = 'center';
			
		} else {
			document.querySelector('.navbar').style.opacity = 0.9;
			document.querySelector('.navbar').style.background = 'black';
			document.querySelector('.nav-brand-span').style.color = 'white';
			document.querySelector('.nav-brand-span').style.fontSize = '1.95rem';
			document.querySelector('.navbar').style.justifyContent = 'space-between';
			
		}
	}
	);
	

	
	
	
	return (
		<nav className='nav navbar px-5 '>
			<div className='nav-brand '>
				<span className='nav-brand-span'>Galleria</span>
			</div>
			

			<form className='search-form-nav'>
				<input
					className='input'
					type='text'
					placeholder='Search'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					/>
				<button onClick={submitHandler} type='submit' className='btn btn-lg'>
					<BsSearch />
				</button>
			</form>

			<div className='nav-list'>
				<ul className='nav-links d-flex'>
					<li className='nav-link '>
						<a className='' href='#'>
							Home
						</a>
					</li>
					<li className='nav-link'>
						<a href='#'>About</a>
					</li>
					<li className='nav-link'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
