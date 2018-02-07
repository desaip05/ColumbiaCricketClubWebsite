import React, { Component } from "react";

class Fixtures extends Component {
	FixtureItem(props) {
		return (
			<tbody>
				{props.fixtures.map(fixture => (
					<tr key={fixture.id}>
						<td>{fixture.date}</td>
						<td>{fixture.type}</td>
						<td>{fixture.opposition}</td>
						<td>{fixture.location}</td>
						<td>{fixture.captain}</td>
					</tr>
				))}
			</tbody>
		);
	}

	render() {
		const fixtures = [
			{
				id: 1,
				date: "March 3, 2018",
				type: "Sarasota Tour",
				opposition: "Sarasota Cricket Club",
				location: "Sarasota",
				captain: "Nischay Mishra"
			},
			{
				id: 2,
				date: "March 4, 2018",
				type: "Sarasota Tour",
				opposition: "Sarasota Cricket Club",
				location: "Sarasota",
				captain: "Nischay Mishra"
			}
		];

		return (
			<div class="fixturesPage">
				<div className="row ng-scope">
					<div className="col">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead class="thead-light">
									<tr>
										<th>Date </th>
										<th>Type </th>
										<th>Opposition</th>
										<th>Location </th>
										<th>Captain</th>
									</tr>
								</thead>
								<this.FixtureItem fixtures={fixtures} />
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Fixtures;