import React from 'react';
import { pure } from 'recompose';

const getSortClass = (sortDirection, sortByIndex, index) => {
	let sortClass = 'hidden';
	if (index === sortByIndex) {
		if (sortDirection === 'ASC') {
			sortClass = 'up';
		} else if (sortDirection === 'DESC') {
			sortClass = 'down';
		}
	}
	return sortClass;
};

const Header = ({ headings, sortDirection, sortByIndex, onSortClick }) => (
	<thead>
		<tr>
			{headings.map((heading, i) => (
				<th key={heading} onClick={() => onSortClick(i, sortDirection === 'ASC' ? 'DESC' : 'ASC')}>
					{heading}
					<i className={getSortClass(sortDirection, sortByIndex, i)} />
				</th>
			))}
		</tr>
	</thead>
);

export default pure(Header);
