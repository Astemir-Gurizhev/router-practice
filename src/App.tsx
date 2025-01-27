import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import Layout from './layouts/Layout'
import Courses from './components/courses/Courses'
import SingleCourse from './components/single-course/SingleCourse'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />}></Route>
						<Route path='/courses' element={<Courses />}></Route>
						<Route path='/courses/:slug' element={<SingleCourse />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/contacts' element={<Contacts />}></Route>
						<Route path='*' element={<NotFound />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
