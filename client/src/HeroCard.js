import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '25vw',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    paddingBottom: '1%',
    backgroundColor: '#34495e',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '80%'
  },
  name: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginBottom: '4%',
    fontSize: '20px'
  },
  bottomSection: {
    borderTop: '1px solid #ecf0f1',
    margin: '10%',
    paddingTop: '3%',
    paddingLeft: '7%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    margin: '0%',
    fontSize: '12px'
  },
  traits: {
    margin: '0%',
    paddingTop: '1%',
    paddingBottom: '2%',
    fontFamily: 'Roboto, sans-serif',
    color: '#ecf0f1',
    fontSize: '12px'
  },
  button: {
    marginTop: '0%',
    marginLeft: '40%',
    marginRight: '50%'
  }
}

const HeroCard = ({ hero, deleteHero }) => {
  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <h2 style={styles.name}>{hero.name}</h2>
        <img style={styles.image} src={hero.img} />
      </div>
      <div style={styles.bottomSection}>
        <p style={styles.titles}>Super Power:</p>
        <p style={styles.traits}>{hero.superPower}</p>
        <p style={styles.titles}>Universe:</p>
        <p style={styles.traits}>{hero.universe}</p>
        <p style={styles.titles}>Nemesis:</p>
        <p style={styles.traits}>{hero.nemesis}</p>
      </div>
      <button style={styles.button} onClick={deleteHero}> DELETE </button>
    </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired
}

export default HeroCard
