import React, { Component } from 'react';
import './SortableTable.css';

const sortRows = (sortByIndex, sortDirection, rows) =>
	rows.sort((a, b) => {
		if (a[sortByIndex] === b[sortByIndex]) {
			return 0;
		}
		let compared = a[sortByIndex] > b[sortByIndex] ? 1 : -1;
		return sortDirection === 'ASC' ? compared : compared * -1;
	});

class SortableTable extends Component {
	state = {
		sortByIndex: 0,
		sortDirection: 'ASC'
	};

	render() {
		const { headings, rows } = this.props;
		const { sortByIndex, sortDirection } = this.state;

		const sortedRows = sortRows(sortByIndex, sortDirection, rows);

		return (
			<table cellPadding={5}>
				<thead>
					<tr>
						{headings.map((heading, i) => {
							let sortClass = 'hidden';
							if (i === sortByIndex) {
								if (sortDirection === 'ASC') {
									sortClass = 'up';
								} else if (sortDirection === 'DESC') {
									sortClass = 'down';
								}
							}
							return (
								<th
									key={heading}
									onClick={() => {
										this.setState({
											sortByIndex: i,
											sortDirection: sortDirection === 'ASC' ? 'DESC' : 'ASC'
										});
									}}
								>
									{heading}
									<i className={sortClass} />
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{sortedRows.map((columns, id) => (
						<tr key={id}>
							{columns.map((column, id) => (
								<td key={id}>{column}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

export default SortableTable;
