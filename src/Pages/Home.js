import React from 'react';

import { BsSearch } from 'react-icons/bs';

import Photos from './Photos';
const Home = () => {

	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<main className='Home'>
			<div className='container-fluid header'>
				<h1 className='header-text'>We can't wait to hear your story!</h1>
				{/* <form className='search-header'>
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
				</form> */}
			</div>
			<h1 className='text-white text-center'>Check other's stories!</h1>
			<Photos />
		</main>
	);
};

export default Home;
