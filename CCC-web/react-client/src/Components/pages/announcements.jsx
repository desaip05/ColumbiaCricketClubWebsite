import React, { Component } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Modal from "react-responsive-modal";
import moment from 'moment';
import _ from 'lodash'

class Announcements extends Component {
	constructor(props) {
	    super(props);

	    const html = '<p>Describe the announcement!</p>';
	    const contentBlock = htmlToDraft(html);
	    const editorState = EditorState.createEmpty();
	    if (contentBlock) {
	      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
	      const editorState = EditorState.createWithContent(contentState);
	    }
	    this.state = {
	    	showForm: false,
	    	expanded: false,
	    	showDeleteButton: false,
	    	title: '',
	    	showMore: false,
	    	editorState: editorState,
	    	announcements: [
				{
					id: 1,
					date: new Date(2018, 0, 28),
					title: "Captains for 2018",
					content: "Madhura has decided to step down as chairman and also has quit the club. The club owes him a huge debt for all that he has done for us. Reach out to him separately and wish him the best if you can. We will move forward and keep our focus on cricket.Sumo has stepped down from the board as well."
				},
				{
					id: 2,
					date: new Date(2018, 1, 1),
					title: "Captains for 2017",
					content: "Here you go"
				}
			]
	    }
	    this.expandedText = this.expandedText.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onEditorStateChange = this.onEditorStateChange.bind(this);
		this.addAnnouncement = this.addAnnouncement.bind(this);
		this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    	this.onCloseForm = this.onCloseForm.bind(this);
    	this.showDeleteButtons = this.showDeleteButtons.bind(this);
	}
	
	AnnouncementItem(props) {
		props.announcements = _.orderBy(props.announcements, ['date'], ['desc']);
		return (
			<div id="posts" class="events small-thumbs">
				{props.announcements.map((item, index) => (
		            <div class="entry clearfix">
						<div class="entry-image">
							<a href="#">
								
								<div class="entry-date">
									{moment(item.date).format("MMM DD")}
								</div>
							</a>
						</div>
						<div class="entry-c">
							<div class="entry-title">
								<h2>
									<a href="#">
										{item.title}
									</a>
								</h2>
							</div>
							<div class="entry-content" >

								<div>
								{props.expanded ? (
									<div>
										<div dangerouslySetInnerHTML={{__html: item.content}}></div>
										<button class="btn" onClick={e => props.expandedText(e)}>
											Show Less
										</button>
									</div>
								) : 
									<div>
										<div dangerouslySetInnerHTML={{__html: item.content.substring(0,140) + "..."}}></div>
										<button class="btn" onClick={e => props.expandedText(e)}>
											Read More
										</button>
									</div>
								}
								
								{props.showDeleteButton ? (
									<button class="btn btn-red" onClick={e => props.deleteAnnouncement(e, item.id)}>
										Delete
									</button>
								) : null}
								</div>
							</div>
						</div>
					</div>
	          	))}
			</div>
		);
	}

    expandedText() {
        this.setState({
            expanded: !this.state.expanded 
        });       
    }

    getMoreTextDiv() {
        if (this.state.expanded) {
          return <div> My extended content </div>;
        } else {
          return null;
        }
    }

    onTitleChange(event) {
	    const target = event.target;
	    const name = target.name;
	    const value = target.value;
	    this.setState({
	      title: value
	    });
  	};

  	onEditorStateChange(editorState) {
	    this.setState({
	      editorState
	    });
  	};

  	addAnnouncement(){
      this.setState({ showForm: true });
  	}

  	deleteAnnouncement(event, itemId){
	    const target = event.target;
	    var announcements = this.state.announcements;
	    _.remove(announcements, function(item) {
    		return item.id === itemId;
		});
		this.setState({announcements});
  	}

  	saveAnnouncement(e){
  		const { editorState } = this.state;
  		e.preventDefault();
		var announcementObj = {};
		announcementObj.id = this.state.announcements.length;
		announcementObj.date = moment();
		announcementObj.title = this.state.title;
		announcementObj.content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		this.state.announcements.push(announcementObj);

  		this.setState({ showForm: false });
  	}

  	onCloseForm() {
		this.setState({ showForm: false });
	};

	showDeleteButtons(){
		this.setState({ showDeleteButton: !this.state.showDeleteButton });
	}

	render() {
		const { editorState } = this.state;
		const { announcements } = this.state;
    	const { title } = this.state;
    	const { showForm } = this.state;
    	const { expanded } = this.state;
    	const { showDeleteButton } = this.state;
		return (
			<div class="container clearfix announcementsPage">
			<div className="row adminRow">
				<button
					className="button"
					onClick={e => this.addAnnouncement(e)}
				>
					Make an announcement
				</button>
				<button
					className="button"
					onClick={e => this.showDeleteButtons(e)}
				>
					Delete an announcement
				</button>
			</div>
			<Modal open={showForm} onClose={this.onCloseForm}>
				<div className="editor-wrapper">
					<input
						type="text"
						id="trtype"
						name="title"
						class="form-control"
						placeholder="Add a title for the announcement"
						required=""
						value={title}
						onChange={this.onTitleChange}
					/>
					<div class="form-group">
				        <Editor
				          editorState={editorState}
				          wrapperClassName="demo-wrapper"
				          editorClassName="demo-editor"
				          onEditorStateChange={this.onEditorStateChange}
				        />
				        <textarea
				          disabled
				          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
				        />
			      	</div>
					<button
						className="button"
						onClick={e => this.saveAnnouncement(e)}
					>
						Save
					</button>
				</div>

			</Modal>
			<this.AnnouncementItem announcements={announcements} showDeleteButton={showDeleteButton} 
			deleteAnnouncement = {this.deleteAnnouncement} expanded={expanded} expandedText={this.expandedText}/>
			{/*-- Pagination
						============================================= -->*/}
			</div>
		);
	}
}
export default Announcements;