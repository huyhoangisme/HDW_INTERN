import _ from 'lodash';
import { useMemo } from 'react';
interface PaginationProps {
	_page: number;
	_limit: number;
	_totalRows: number;
	siblingCount: number;
}

export const usePagination = (props: PaginationProps) => {
	const { _page, _limit, _totalRows, siblingCount } = props;
	const paginationRanges = useMemo(() => {
		const totalPages = Math.ceil(_totalRows / _limit);
		const totalPagesNumber = siblingCount + 2;
		const leftSiblingCount = Math.max(1, _page - siblingCount);
		const rightSiblingCount = Math.min(_page + siblingCount, totalPages);
		const shouldShowLeftDots = leftSiblingCount > 2;
		const shouldShowRightDots = rightSiblingCount < totalPages;
		if (totalPagesNumber >= totalPages) return _.range(1, totalPages + 1);
		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 1 + 2 * siblingCount;
			const leftRange = _.range(1, leftItemCount + 1);
			return [...leftRange, 'DOTS', totalPages];
		}
		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 1 + 2 * siblingCount;
			const rightRange = _.range(totalPages - rightItemCount + 1, totalPages + 1);
			return [1, 'DOTS', ...rightRange];
		}
	}, [_page, siblingCount, _limit, _totalRows]);

	return paginationRanges;
};
