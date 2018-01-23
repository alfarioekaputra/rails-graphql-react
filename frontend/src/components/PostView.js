import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//const postId = this.props.match.params.postId
class PostView extends Component {
  render() {
    if (this.props.post && this.props.post.loading) {
      return <div>Loading</div>
    }
    
    // 2
    if (this.props.post && this.props.post.error) {
      return <div>Error</div>
    }
    const postView = this.props.post.post
    return (
      <div>
        <div>
            {postView.title}
            <br/>
            {postView.body}
            <br/>
            created by {postView.user.firstName}
        </div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }
}

const POST_VIEW_QUERY = gql`
    # Try to write your query here
    query Post($id: ID!) {
        post(id: $id) {
          id
          title
          body
          user{
            firstName
            }
        }
      }
`

// 3
export default graphql(POST_VIEW_QUERY, { name: 'post', options: (props) => ({variables: { id: props.match.params.postId }})} ) (PostView)