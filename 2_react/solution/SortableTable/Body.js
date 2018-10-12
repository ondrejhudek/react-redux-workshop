import React from 'react';
import { pure } from 'recompose';

const sortRows = (sortByIndex, sortDirection, rows) =>
	rows.sort((a, b) => {
		if (a[sortByIndex] === b[sortByIndex]) {
			return 0;
		}
		let compared = a[sortByIndex] > b[sortByIndex] ? 1 : -1;
		return sortDirection === 'ASC' ? compared : compared * -1;
	});

const Body = ({ rows, sortByIndex, sortDirection }) => (
	<tbody>
		{sortRows(sortByIndex, sortDirection, rows).map((columns, id) => (
			<tr key={id}>
				{columns.map((column, id) => (
					<td key={id}>{column}</td>
				))}
			</tr>
		))}
	</tbody>
);

export default pure(Body);
