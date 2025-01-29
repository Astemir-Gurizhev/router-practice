import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import courses from '../../data/courses'
import styles from './Courses.module.css'

const SORT_KEYS = ['title', 'slug', 'id']

const sortCourses = (courses, key) => {
	const sortCourses = [...courses]
	if (!key || !SORT_KEYS.includes(key)) {
		return sortCourses
	}
	sortCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortCourses
}

const Courses = () => {
	const location = useLocation()
	const query = queryString.parse(location.search)
	const navigate = useNavigate()
	const [sortKey, setSortKey] = useState(query.sort)

	const [sortedCourses, setSortedCourses] = useState(
		sortCourses(courses, sortKey)
	)

	useEffect(() => {
		if(!SORT_KEYS.includes(sortKey)) {
			navigate('.')
			setSortKey(null)
		}
	}, [sortKey, navigate])

	return (
		<>
			<h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
			{sortedCourses.map(course => (
				<div className={styles.course} key={course.id}>
					<Link to={course.slug}>{course.title}</Link>
				</div>
			))}
		</>
	)
}

export default Courses
