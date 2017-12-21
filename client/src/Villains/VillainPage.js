import React from 'react'
import PropTypes from 'prop-types'
import CommentList from '../Components/CommentList'

const VillainPage = ({villain, comments}) => {
  return (
    <div>
      <h1>Name: {villain.name}</h1>
      <img src={villain.img} />
      <h3>Universe: {villain.universe}</h3>
      <CommentList comments={comments}/>
    </div>
  )
}

VillainPage.PropTypes = {
  villain: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
}


export default VillainPage
