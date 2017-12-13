import React from 'react'
import VillainCard from './VillainCard'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#22313F',
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
  },
  villainSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#3FC380',
    borderRadius: '2px'
  }
}

const VillainsList = ({ villains, deleteVillain, showUniqueVillain }) => {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.header}>Villains</h2>
        <h4 style={styles.subHeader}>Meet the Villains</h4>
      </div>
      <div style={styles.villainSection}>
      {
        villains.map((villain, index) => {
          return <VillainCard
            villain={villain}
            key={index}
            deleteVillain={() => deleteVillain(villain)}
            showUniqueVillain={() => showUniqueVillain(villain)}
          />
        })
      }
      </div>
    </div>
  )
}

VillainsList.propTypes = {
  villains: PropTypes.array.isRequired,
  deleteHero: PropTypes.func.isRequired
}

export default VillainsList
