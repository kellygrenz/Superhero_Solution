import React from 'react'
import PropTypes from 'prop-types'

const VillainPage = ({villain}) => {
  return (
    <div>
      <h1>Name: {villain.name}</h1>
      <img src={villain.img} />
      <h3>Universe: {villain.universe}</h3>
    </div>
  )
}


export default VillainPage
