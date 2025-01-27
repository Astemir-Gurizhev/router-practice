import { Outlet } from 'react-router'
import Menu from '../components/menu/Menu'

const Layout = () => {
	return (
		<>
			<Menu />
			<Outlet />
		</>
	)
}

export default Layout
