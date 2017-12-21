import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#412446'
  },
  header: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    fontSize: '28px',
    marginBottom: '1%'
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    color: '#fff',
    fontSize: '18px',
    marginTop: '0%'
  }
}

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Home</h2>
      <h4 style={styles.subHeader}>Let's meet the Superheroes & Villains</h4>
    </div>
  )
}


export default Home
