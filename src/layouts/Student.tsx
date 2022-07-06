import { useAppDispatch, useAppSelector } from 'app/hooks';
import
	{
		dashboardActions,
		selectorPagination,
		selectorStudentList
	} from 'features/dashboard/dashboardSlice';
import { useQueryString } from 'hooks/queryString';
import { Students } from 'models';
import { useEffect, useState } from 'react';
import Paginations from '../layouts/Pagination';
import Search from './Search';
import StudentList from './StudentList';

const Student = () => {
	const studentList = useAppSelector<Students[]>(selectorStudentList);
	const pagination = useAppSelector(selectorPagination);
	const dispatch = useAppDispatch();
	const currentPage = parseInt(useQueryString('page'));
	const currentSearchValue = useQueryString('name_like');
	const [filters, setFilters] = useState({
		_page: currentPage,
		_limit: 10,
		name_like: currentSearchValue,
	});
	useEffect(() => {
		dispatch(dashboardActions.getAllStudentStart(filters));
	}, [dispatch, filters]);

	const onPageChange = (numberPage: number) => {
		setFilters({
			...filters,
			_page: numberPage,
		});
	};
	const onSubmit = (searchValue: string) => {
		setFilters({
			...filters,
			_page: 1,
			name_like: searchValue,
		});
	};
	return (
		<>
			<Search onSubmit={onSubmit} />
			<StudentList studentList={studentList} />
			{!filters.name_like && <Paginations pagination={pagination} onPageChange={onPageChange} />}
		</>
	);
};
export default Student;
