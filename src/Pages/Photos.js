import React from 'react';
import { Link } from 'react-router-dom';
import SinglePicture from './SinglePicture';
import { useGlobalContext } from '../context';

const Photos = () => {
	const { data, isLoading } = useGlobalContext();

	if (isLoading) {
		return (
			<div>
				<h1>Loading..</h1>
			</div>
		);
	}
	return (
		<main className='photos'>
			<div className='photos-center'>
				{data.map((photo) => {
					return <SinglePicture key={photo.id} {...photo} />;
				})}
			</div>
		</main>
	);
};

export default Photos;
