import React,{useState} from 'react'
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { getPhotos } from '../features/photos/photosSlice';


const Search = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input > 2) {
			dispatch(getPhotos({ query: input, page: 1 }));
			setInput("")
    }
  }

  return (
		<form>
			<input
				type='text'
				placeholder='Search'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={submitHandler} type='submit'>
				<BsSearch />
			</button>
		</form>
	);
}

export default Search