import { Link } from 'react-router'
import courses from '../../data/courses'
import styles from './Courses.module.css'
const Courses = () => {
	return (
		<>
			<h1>Courses</h1>
			{courses.map(course => (
				<div className={styles.course} key={course.id}>
					<Link to={course.slug}>{course.title}</Link>
				</div>
			))}
		</>
	)
}

export default Courses
