import { PaginationValues } from 'models';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
export interface PaginationProps {
	pagination: PaginationValues;
	onPageChange: (number: number) => void;
}
const Paginations = ({ pagination, onPageChange }: PaginationProps) => {
	const { _page, _limit, _totalRows } = pagination;
	const totalPages = Math.ceil(_totalRows / _limit);
	const pages = _.range(1, totalPages + 1);
	const history = useHistory();
	const hanldePageChange = (numPage: number) => {
		const newUrl = `student?page=${numPage}`;
		history.push(newUrl);
		onPageChange(numPage);
	};
	return (
		<div className="px-24 mt-3 flex justify-end">
			<Pagination>
				<PaginationItem disabled={_page <= 1}>
					<PaginationLink previous onClick={() => hanldePageChange(_page - 1)} />
				</PaginationItem>
				{pages?.map((page, index) => {
					return (
						<PaginationItem key={index} active={page === _page}>
							<PaginationLink onClick={() => hanldePageChange(page)}>{page}</PaginationLink>
						</PaginationItem>
					);
				})}
				<PaginationItem disabled={_page >= totalPages}>
					<PaginationLink next onClick={() => hanldePageChange(_page + 1)} />
				</PaginationItem>
			</Pagination>
		</div>
	);
};
export default Paginations;
