import React from 'react'
import HeroCard from './HeroCard'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#22313F'
    
  },
  header: {
    fontFamily: 'Candal, sans-serif',
    fontSize: '28px',
    color: '#e74c3c',
    marginBottom: '1%'
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    color: '#fff',
    fontSize: '18px',
    marginTop: '0%'
  },
  heroSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#3FC380',
    borderRadius: '2px'
  }
}

const HeroesList = ({ heroes, deleteHero, showUniqueHero }) => {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.header}>Heroes</h2>
        <h4 style={styles.subHeader}>Meet the Heroes</h4>
      </div>
      <div style={styles.heroSection}>
        {
          heroes.map((hero, index) => {
            return <HeroCard
              hero={hero}
              key={index}
              deleteHero={() => deleteHero(hero)}
              showUniqueHero={() => showUniqueHero(hero)}
            />
          })
        }
      </div>
    </div>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.array.isRequired,
  deleteHero: PropTypes.func.isRequired
}

export default HeroesList
