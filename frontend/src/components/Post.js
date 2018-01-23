import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const newTo = { 
        pathname: "/post/view/"+this.props.post.id, 
        param1: this.props.post.id 
    };
    return (
      <div>
        <div>
            <Link to={newTo} className="navbar-item">
                {this.props.post.title}
            </Link>
        </div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }
}

export default Post