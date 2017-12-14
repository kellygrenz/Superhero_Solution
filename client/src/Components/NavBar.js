import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#E9D460',
    padding: '40px',
    alignItems: 'center'
    
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  heroHeader: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginTop: '2%'
  },
  and: {
    fontFamily: 'Candal, sans-serif',
    color: '#ecf0f1',
    marginTop: '2%'
  },
  villainHeader: {
    fontFamily: 'Candal, sans-serif',
    color: '#7f8c8d',
    marginTop: '2%',
    paddingLeft: '1%'
  },
  nav: {
    fontFamily: 'Roboto, sans-serif',
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Candal, sans-serif',
    fontSize: '20px',
    color: '#22313F',
    marginLeft: '3%',
    marginRight: '3%'
  }
}

const NavBar = () => {
  return (
    
      <nav style={styles.navContainer}>
        <Link style={styles.link} to='/'> Home </Link>
        <Link style={styles.link} to='/heroes'> Heroes </Link>
        <Link style={styles.link} to='/create-hero'> Create Hero </Link>
        <Link style={styles.link} to='/villains'> Villains </Link>
        <Link style={styles.link} to='/create-villain'> Create Villain </Link>
      </nav>
    
  )
}

export default NavBar
