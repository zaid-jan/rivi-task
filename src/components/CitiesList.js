import React from 'react'
import { connect } from 'react-redux';
import '../css/box.css'

const CitiesList = (props) => {
    let tags = props.tags.map(item => {
        return (
            <span className="list" key={item.id}>{item.text}</span>
        )
    })
    return (
        <div className="box" onScroll={(e) => {console.log("scrolling", e)}}>
            <div className="contents">
                {tags}
            </div>
                
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
}

export default connect(mapStateToProps, { })(CitiesList);