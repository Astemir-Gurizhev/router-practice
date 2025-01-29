import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import courses from '../../data/courses'; 
import styles from './Courses.module.css';

type Course = {
  id: number;
  title: string;
  slug: string;
};

type SortKeys = 'title' | 'slug' | 'id';

const SORT_KEYS: SortKeys[] = ['title', 'slug', 'id'];

const sortCourses = (courses: Course[], key?: SortKeys): Course[] => {
  const sortCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortCourses;
  }
  sortCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortCourses;
};

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState<SortKeys | undefined>(
    query.sort as SortKeys | undefined
  );

  const [sortedCourses, setSortedCourses] = useState<Course[]>(
    sortCourses(courses, sortKey ?? undefined)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey!)) {
      navigate('.');
      setSortKey(undefined);
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div className={styles.course} key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Courses;