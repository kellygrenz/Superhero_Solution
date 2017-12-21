import React from 'react'
import PropTypes from 'prop-types'

const CommentList = ({comments}) =>
  <div>
    <h2>Comments:</h2>
    {
      comments && comments.length > 0
      ? comments.map(comment => {
        return <p key={comment._id}>{comment.text}</p>
      })
      : <p>No Comments</p>
    }
  </div>

CommentList.PropTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
