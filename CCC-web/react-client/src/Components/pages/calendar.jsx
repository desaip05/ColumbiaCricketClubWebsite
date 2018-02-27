import React, { Component } from "react";

import BigCalendar from "react-big-calendar";
import Modal from "react-responsive-modal";
import moment from 'moment';

/*css import*/
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-responsive-modal/lib/react-responsive-modal.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class FixtureCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopup: false,
      showForm: false,
      showDelete: false,
      activeEvent:{
        start: null,
        end: null,
        type: "",
        opposition: "",
        location: "",
        captain: ""
      },
      newEvent:{
        title:"",
        type: "",
        opposition: "",
        location: "",
        captain: ""
      },
      fixtures: [
        {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2018, 3, 0),
          end: new Date(2018, 3, 1)
        },
        {
          id: 1,
          title: "Sarasota Tour",
          start: new Date(2018, 2, 2),
          end: new Date(2018, 2, 4),
          allDay: true,
          opposition: "Sarasota Cricket Club",
          location: "Sarasota",
          captain: "Nischay Mishra"
        },
        {
          id: 0,
          title: 'Simultaneous Event',
          allDay: true,
          start: new Date(2018, 2, 2, 5, 30, 0),
          end: new Date(2018, 2, 2, 7, 30, 0)
        },
      ]
    };
    this.popupEventDetails = this.popupEventDetails.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.addFixtureToEventsList = this.addFixtureToEventsList.bind(this);
    this.createEvent = this.createEvent.bind(this);
    // this.showDeleteColumn = this.showDeleteColumn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  FixtureFormItem(props) {
    // console.log(props.formItems);
    const formItems = props.formItems;
    return (
      <div class="fixture-form">
        <form
          id="tr_form"
          name="tr_form"
          class="form-horizontal"
        >
          <div class="form-group">
            <label class="control-label col-sm-3">Start Time</label>
            <div class="col-sm-8">
              <input
                readonly="readonly"
                type="text"
                value={formItems.state.newEvent.start.toLocaleString()}
                id="trstart"
                name="start"
                class="form-control"
                onfocus="this.blur()"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">End Time</label>
            <div class="col-sm-8">
              <input
                readonly="readonly"
                type="text"
                value={formItems.state.newEvent.end.toLocaleString()}
                id="trend"
                name="end"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Title</label>
            <div class="col-sm-8">
              <input
                type="text"
                id="trtype"
                name="title"
                class="form-control"
                placeholder="Add a title"
                required=""
                value={formItems.state.newEvent.title}
                onChange={formItems.handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Type</label>
            <div class="col-sm-8">
              <input
                type="text"
                id="trtype"
                name="type"
                class="form-control"
                placeholder="Is it a league match or friendly?"
                required=""
                value={formItems.state.newEvent.type}
                onChange={formItems.handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Opposition</label>
            <div class="col-sm-8">
              <input
                type="text"
                id="tropposition"
                name="opposition"
                class="form-control"
                placeholder="Who is the match against?"
                required=""
                value={formItems.state.newEvent.opposition}
                onChange={formItems.handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Location</label>
            <div class="col-sm-8">
              <input
                type="text"
                id="trlocation"
                name="location"
                class="form-control"
                placeholder="Where is the match?"
                required=""
                value={formItems.state.newEvent.location}
                onChange={formItems.handleChange}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Captain</label>
            <div class="col-sm-8">
              <input
                type="text"
                id="trcaptain"
                name="captain"
                class="form-control"
                placeholder="Who is the captain?"
                required=""
                value={formItems.state.newEvent.captain}
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
                onClick={e => formItems.addFixtureToEventsList(e)}
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
    let newEvent = Object.assign({}, this.state.newEvent);    //creating copy of object
    newEvent[name] = value;
    this.setState({
      newEvent
    });
  }

  onOpenModal(event) {
    this.setState({ activeEvent: event });
    this.setState({ openPopup: true });
  };

  onCloseModal() {
    this.setState({ openPopup: false });
  };

  onCloseForm() {
    this.setState({ showForm: false });
  };

  popupEventDetails(event){
    this.onOpenModal(event);
    // alert(`Opposition: ${event.opposition}\n` + `Location: ${event.location}\n` + `Captain: ${event.captain}`)
  }

  createEvent(slotInfo){
    if(slotInfo.start>=(moment().subtract(1, "days"))){
      let newEvent = Object.assign({}, this.state.newEvent);    //creating copy of object
      newEvent.start = slotInfo.start;                          //updating value
      newEvent.end = slotInfo.end;
      this.setState({newEvent});
      this.setState({ showForm: true });
    }
  }

  addFixtureToEventsList(e){
    e.preventDefault();
    var newEvent = this.state.newEvent;
    console.log("Adding");
    var fixtureObj = {};
    fixtureObj.title = newEvent.title;
    fixtureObj.start = newEvent.start;
    fixtureObj.end = newEvent.end;
    fixtureObj.type = newEvent.type;
    fixtureObj.opposition = newEvent.opposition;
    fixtureObj.location = newEvent.location;
    fixtureObj.captain = newEvent.captain;
    this.state.fixtures.push(fixtureObj);

    this.setState({ showForm: false });
  }

  render() {
    const {openPopup} = this.state;
    const {showForm} = this.state;
    const { fixtures } = this.state;
    const showDelete = this.state.showDelete;
    const currTime = new Date();
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    return (
      <div class="calendarPage">
        <div className="row ng-scope">
          <Modal open={openPopup} onClose={this.onCloseModal} little>
            <h2>{this.state.activeEvent.title}</h2>
            <p>
            Opposition: {this.state.activeEvent.opposition}
            <br/>
            Location: {this.state.activeEvent.location}
            <br/>
            Captain: {this.state.activeEvent.captain}
            </p>
          </Modal>
          <React.Fragment>
            <BigCalendar
              selectable
              events={fixtures}
              views={allViews}
              step={60}
              showMultiDayTimes
              defaultDate={currTime}
              onSelectEvent={event => this.popupEventDetails(event)}
              onSelectSlot={slotInfo => this.createEvent(slotInfo)}
            />
          </React.Fragment>
          <Modal open={showForm} onClose={this.onCloseForm}>
            <this.FixtureFormItem formItems={this} />
          </Modal>
        </div>
      </div>
    );
  }
}
export default FixtureCalendar;