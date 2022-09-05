import React from 'react';

const SinglePicture = ({
	urls: { regular },
	alt_description,
	likes,
	user: {
		name,
		portfolio_url,
		profile_image: { medium },
	},
}) => {
	const handler = (id) => {
		console.log(id);
	};
	return (
		<button
			className='photo'
			onClick={(id) => {
				handler(id);
			}}>
			<img src={regular} alt={alt_description} />
			<div className='photo-info'>
				<div>
					<h4>{name}</h4>
					<p>{likes} likes</p>
				</div>
				<a href={portfolio_url}>
					<img src={medium} alt={name} className='user-img' />
				</a>
			</div>
		</button>
	);
};

export default SinglePicture;
