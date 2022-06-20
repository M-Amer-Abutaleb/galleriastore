import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import PicturePage from './Pages/PicturePage ';
import Error from './Pages/Error';

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/photo/:id' element={<PicturePage />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
