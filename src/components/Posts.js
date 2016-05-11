import React, { PropTypes, Component } from 'react';
var className = require('classnames');


export default class Posts extends Component {
  render(){
    return (
      <ul className="box">
        {this.props.posts.map((post, i) =>
          <li key={i}><a href={post.url} target="_blank">{post.title.substring(0,40) + "..."}</a><span> Score: {post.score}</span></li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
