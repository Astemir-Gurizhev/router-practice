import queryString from 'query-string'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import courses from '../../data/courses'
import styles from './Courses.module.css'

const sortCourses = (courses, key) => {
	const sortCourses = [...courses]
	sortCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortCourses
}

const Courses = () => {
	const location = useLocation()
	const query = queryString.parse(location.search)
	const [sortKey, setSortKey] = useState(query.sort)

	const [sortedCourses, setSortedCourses] = useState(
		sortCourses(courses, sortKey)
	)

	return (
		<>
			<h1>Courses</h1>
			{sortedCourses.map(course => (
				<div className={styles.course} key={course.id}>
					<Link to={course.slug}>{course.title}</Link>
				</div>
			))}
		</>
	)
}

export default Courses
