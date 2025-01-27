import { NavLink } from 'react-router'
import styles from './Menu.module.css'
const Menu = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to='/' end>
				Home
			</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contacts'>Contacts</NavLink>
		</nav>
	)
}

export default Menu
