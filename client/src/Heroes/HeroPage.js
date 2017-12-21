import React from 'react'
import PropTypes from 'prop-types'
import CommentList from '../Components/CommentList'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#22313F'
  },
  name: {
    color: '#019875'
  }, 
  link: {
    textDecoration: 'none',
    color: '#E9D460'
  }
}

const HeroPage = ({hero, comments}) => {
  return (
    <div>
      <div style={style.container}>
        <h1 style={style.name}>Get to Know {hero.name}</h1>
     
        <Link style={style.link} to={`/edit-hero/${hero._id}`}>Edit this Hero </Link>
        <img src={hero.img} />
        <p>Nemesis: {hero.nemesis ? hero.nemesis.name : 'no nemesis'}</p>
        <CommentList comments={comments} />
      </div>
    </div>
  )
}

HeroPage.PropTypes = {
  hero: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
}

  export default HeroPage
