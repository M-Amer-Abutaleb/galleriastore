import Navbar from './components/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/Error';
import SinglePicture from './Pages/SinglePicture/SinglePicture';

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/photo/:id' element={<SinglePicture />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
