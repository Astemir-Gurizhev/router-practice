import { Link } from 'react-router'
import styles from './Menu.module.css'
const Menu = () => {
	return (
		<nav className={styles.nav}>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/contacts'>Contacts</Link>
		</nav>
	)
}

export default Menu
