import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { FiSearch } from "react-icons/fi";
import { connect } from 'react-redux'
import { addTag } from '../actions/addTag'
import { deleteTag } from '../actions/deleteTag'
import '../css/search.css'

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];


const Search = props => {

    let tags = props.tags
    let suggestions = props.cities    
    const handleDelete = (i) => {
        props.deleteTag(i);
    }
    const handleAddition = (tag) => {
        console.log("tag", tag)
        props.addTag(tag)
    }
    console.log("suggestion", suggestions)
    return (
        <div className="container">
            <ReactTags 
                tags={tags}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                delimiters={delimiters} 
                allowDragDrop={false}
                placeholder=''
                minQueryLength={1}
                renderSuggestion = {({ text }, query) => 
                    <div className="suggestions">{text}</div>
                }
            />
            <div className="icon">
                <FiSearch size={25} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
        tags: state.tags
    }
}

export default connect(mapStateToProps, { addTag, deleteTag })(Search);