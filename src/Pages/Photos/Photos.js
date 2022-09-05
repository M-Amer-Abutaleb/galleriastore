import React, { useEffect } from 'react';
import SinglePicture from '../SinglePicture/SinglePicture';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../Redux/photos/photosSlice';
// import { useGlobalContext } from '../context';

const Photos = () => {
	// const { data, isLoading } = useGlobalContext();
	const { data, isLoading } = useSelector((state) => state.photos);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(data);
	
	useEffect(() => {
		if (!isLoading) {
			dispatch(getPhotos());
		}
	}, [dispatch]);

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
