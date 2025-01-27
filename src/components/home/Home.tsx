import { Link } from 'react-router'

const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<Link to='/about'> Go to About </Link>	<br/>
			<Link to='/contacts'> Go to Contacts </Link>
		</>
	)
}

export default Home
