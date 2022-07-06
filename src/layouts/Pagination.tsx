import { usePagination } from 'hooks/Pagination';
import { PaginationValues } from 'models';
import Pagination from 'react-bootstrap/Pagination';
import { useHistory } from 'react-router-dom';
export interface PaginationProps {
	pagination: PaginationValues;
	onPageChange: (number: number) => void;
}
const Paginations = ({ pagination, onPageChange }: PaginationProps) => {
	const { _page, _totalRows, _limit } = pagination;
	const totalPages = _totalRows / _limit;
	const paginationRanges = usePagination({ ...pagination, siblingCount: 1 });
	const history = useHistory();
	const hanldePageChange = (numPage: number) => {
		const newUrl = `student?page=${numPage}`;
		history.push(newUrl);
		onPageChange(numPage);
	};
	return (
		<div className="px-24 mt-3 flex justify-end">
			<Pagination>
				<Pagination.Prev disabled={_page <= 1} onClick={() => hanldePageChange(_page - 1)} />
				{paginationRanges?.map((page) => {
					if (page === 'DOTS') return <Pagination.Ellipsis />;
					else {
						return (
							<Pagination.Item
								active={page === _page}
								onClick={() => hanldePageChange(page as number)}
							>
								{page}
							</Pagination.Item>
						);
					}
				})}
				<Pagination.Next
					disabled={_page >= totalPages}
					onClick={() => hanldePageChange(_page + 1)}
				/>
			</Pagination>
		</div>
	);
};
export default Paginations;
