import React, { PureComponent } from 'react';
import Header from './Header';
import Body from './Body';
import './SortableTable.css';

class SortableTable extends PureComponent {
	state = {
		sortByIndex: 0,
		sortDirection: 'ASC'
	};

	handleOnSortClick = (sortByIndex, sortDirection) => this.setState({ sortByIndex, sortDirection });

	render() {
		const { headings, rows } = this.props;
		const { sortByIndex, sortDirection } = this.state;
		return (
			<table cellPadding={5}>
				<Header
					headings={headings}
					sortDirection={sortDirection}
					sortByIndex={sortByIndex}
					onSortClick={this.handleOnSortClick}
				/>
				<Body rows={rows} sortByIndex={sortByIndex} sortDirection={sortDirection} />
			</table>
		);
	}
}

export default SortableTable;
