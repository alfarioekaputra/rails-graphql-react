import React, { Component } from 'react'
import Post from './Post'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class PostList extends Component {
  render() {
    if (this.props.allPost && this.props.allPost.loading) {
        return <div>Loading</div>
    }
    if (this.props.allPost && this.props.allPost.error) {
        return <div>Error</div>
    }
    const listToRender = this.props.allPost.posts

    return (
      <div>{listToRender.map(post => <Post key={post.id} post={post} />)}</div>
    )
  }
}

const POST_QUERY = gql`
    # Try to write your query here
    {
        posts {
            id
            title
            body
        }
    }
`

// 3
export default graphql(POST_QUERY, { name: 'allPost' }) (PostList)
//export default MemberList