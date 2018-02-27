import React, { Component } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Modal from "react-responsive-modal";

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
	    	editorState: editorState,
	    	announcements: [
				{
					id: 1,
					date: new Date(2018, 2, 28),
					title: "Captains for 2018",
					content: "Here you go"
				},
				{
					id: 2,
					date: new Date(2018, 3, 1),
					title: "Captains for 2017",
					content: "Here you go"
				}
			]
	    }
	    this.expandedText = this.expandedText.bind(this);
	    this.getMoreTextDiv = this.getMoreTextDiv.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onEditorStateChange = this.onEditorStateChange.bind(this);
		this.addAnnouncement = this.addAnnouncement.bind(this);
		this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    	this.onCloseForm = this.onCloseForm.bind(this);
    	this.showDeleteButtons = this.showDeleteButtons.bind(this);
	}
	
	AnnouncementItem(props) {
		return (
			<div id="posts" class="events small-thumbs">
				{props.announcements.map((item, index) => (
		            <div class="entry clearfix">
						<div class="entry-image">
							<a href="#">
								
								<div class="entry-date">
									10<span>Apr</span>
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
								<div dangerouslySetInnerHTML={{__html: item.content}}></div>
								<button class="btn" onClick={e => this.showMore(e)}>
									Read More
								</button>
								{props.showDeleteButton ? (
									<button class="btn btn-red" onClick={e => props.deleteAnnouncement(e, item.id)}>
										Delete
									</button>
								) : null}
							</div>
						</div>
					</div>
	          	))}
			</div>
		);
	}

    expandedText() {
        this.setState({
            expanded: true
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
	    console.log(itemId);
	    var announcements = this.state.announcements;
	    // get index of object with id: itemId
		var removeIndex = announcements.map(function(item) { return item.id; }).indexOf(itemId);
		// remove object
		announcements.splice(removeIndex, 1);
		this.setState({announcements});
  	}

  	saveAnnouncement(e){
  		const { editorState } = this.state;
  		e.preventDefault();
		var announcementObj = {};
		announcementObj.id = this.state.announcements.length;
		announcementObj.date = new Date();
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
    /*
    	substr($text, 0 , $limit);
		var expandedDiv = this.getMoreTextDiv();
    	<div>
             <a onClick={this.expandedText}>Read more</a>
             { expandedDiv }
         </div>
     */

	render() {
		const { editorState } = this.state;
		const { announcements } = this.state;
    	const { title } = this.state;
    	const { showForm } = this.state;
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
			deleteAnnouncement = {this.deleteAnnouncement} />
			{/*-- Pagination
						============================================= -->*/}
			</div>
		);
	}
}
export default Announcements;