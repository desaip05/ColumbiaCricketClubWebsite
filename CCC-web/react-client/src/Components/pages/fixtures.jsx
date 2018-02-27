import React, { Component } from "react";

// Import React Table
import ReactTable from "react-table";
import matchSorter from "match-sorter";

class Fixtures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			showDelete: false,
			date: "",
			type: "",
			opposition: "",
			location: "",
			captain: "",
			fixtures: [
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
			]
		};
		this.addFixture = this.addFixture.bind(this);
		this.showDeleteColumn = this.showDeleteColumn.bind(this);
		this.addFixtureToList = this.addFixtureToList.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	FixtureFormItem(props) {
		console.log(props.formItems);
		const formItems = props.formItems;
		return (
			<div class="fixture-form">
				<form
					id="tr_form"
					name="tr_form"
					class="form-horizontal"
					action="mail/tr.php"
				>
					<div class="form-group">
						<label class="control-label col-sm-2">Date</label>
						<div class="col-sm-10">
							<input
								type="text"
								id="trdate"
								name="date"
								class="form-control"
								data-parse="date"
								placeholder="When is the match? MM/DD//YYYY"
								pattern="\d{2}\/\d{2}/\d{4}"
								required=""
								value={formItems.state.date}
								onChange={formItems.handleChange}
							/>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2">Type</label>
						<div class="col-sm-10">
							<input
								type="text"
								id="trtype"
								name="type"
								class="form-control"
								placeholder="Is it a league match or friendly?"
								required=""
								value={formItems.state.type}
								onChange={formItems.handleChange}
							/>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2">Opposition</label>
						<div class="col-sm-10">
							<input
								type="text"
								id="tropposition"
								name="opposition"
								class="form-control"
								placeholder="Who is the match against?"
								required=""
								value={formItems.state.opposition}
								onChange={formItems.handleChange}
							/>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2">Location</label>
						<div class="col-sm-10">
							<input
								type="text"
								id="trlocation"
								name="location"
								class="form-control"
								placeholder="Where is the match?"
								required=""
								value={formItems.state.location}
								onChange={formItems.handleChange}
							/>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2">Captain</label>
						<div class="col-sm-10">
							<input
								type="text"
								id="trcaptain"
								name="captain"
								class="form-control"
								placeholder="Who is the captain?"
								required=""
								value={formItems.state.captain}
								onChange={formItems.handleChange}
							/>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<input
								type="submit"
								value="Add"
								id="add_button"
								onClick={e => formItems.addFixtureToList(e)}
							/>
							<input
								type="cancel"
								value="Cancel"
								id="cancel_button"
								onClick={e => formItems.cancelAction(e)}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}

	handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}

	addFixture(e) {
		e.preventDefault();
		console.log("Adding");
		this.setState({ showForm: true });
	}

	cancelAction(e){
		e.preventDefault();
		console.log("Adding");
		this.setState({ showForm: false });
	}

	showDeleteColumn(e) {
		e.preventDefault();
		this.setState({ showDelete: true });
	}

	addFixtureToList(e) {
		e.preventDefault();
		console.log("Adding");
		var fixtureObj = {};
		fixtureObj.date = this.state.date;
		fixtureObj.type = this.state.type;
		fixtureObj.opposition = this.state.opposition;
		fixtureObj.location = this.state.location;
		fixtureObj.captain = this.state.captain;
		this.state.fixtures.push(fixtureObj);

		this.setState({ showForm: false });
	}

	render() {
		const { fixtures } = this.state;
		const showDelete = this.state.showDelete;
		return (
			<div class="fixturesPage">
				<div className="row adminRow">
					<button
						className="button"
						onClick={e => this.addFixture(e)}
					>
						Add a fixture
					</button>
					<button
						className="button"
						onClick={e => this.showDeleteColumn(e)}
					>
						Delete a fixture
					</button>
				</div>
				<div>
					{this.state.showForm ? (
						<this.FixtureFormItem formItems={this} />
					) : null}
				</div>
				<div className="row ng-scope">
					<div className="col">
						<div className="table-responsive">
							<ReactTable
								data={fixtures}
								filterable
								defaultFilterMethod={(filter, row) =>
									String(row[filter.id]) === filter.value
								}
								columns={[
									{
										// Header: "Delete",
										id: "delete",
										className: "fa fa-minus-circle deleteRow",
										show: showDelete,
										filterable: false,
										width: 40
									},
									{
										Header: "Date",
										id: "date",
										accessor: d => d.date,
										filterMethod: (filter, rows) =>
											matchSorter(rows, filter.value, {
												keys: ["date"]
											}),
										filterAll: true
									},
									{
										Header: "Type",
										id: "type",
										accessor: d => d.type,
										filterMethod: (filter, rows) =>
											matchSorter(rows, filter.value, {
												keys: ["type"]
											}),
										filterAll: true
									},
									{
										Header: "Opposition",
										id: "opposition",
										accessor: d => d.opposition,
										filterMethod: (filter, rows) =>
											matchSorter(rows, filter.value, {
												keys: ["opposition"]
											}),
										filterAll: true
									},
									{
										Header: "Location",
										id: "location",
										accessor: d => d.location,
										filterMethod: (filter, rows) =>
											matchSorter(rows, filter.value, {
												keys: ["location"]
											}),
										filterAll: true
									},
									{
										Header: "Captain",
										id: "captain",
										accessor: d => d.captain,
										filterMethod: (filter, rows) =>
											matchSorter(rows, filter.value, {
												keys: ["captain"]
											}),
										filterAll: true
									}
								]}
								defaultPageSize={fixtures.length>10? 10: fixtures.length}
								className="-striped -highlight"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Fixtures;