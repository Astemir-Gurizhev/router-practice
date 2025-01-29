import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import courses from '../../data/courses'

const SingleCourse = () => {
	const params = useParams()
	const course = courses.find(course => course.slug === params.slug)
	const navigate = useNavigate()

	useEffect(() => {
		if (!course) {
			navigate('..', { relative: 'path' })
		}
	}, [course, navigate])
	return (
		<>
			<h1>{course?.title}</h1>
			<h3>{course?.slug}</h3>
			<Link
				to='..'
				relative='path'
				style={{
					textDecoration: 'underline',
				}}
			>
				All courses
			</Link>
		</>
	)
}

export default SingleCourse
