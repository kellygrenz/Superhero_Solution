import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    width: '25vw',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    paddingBottom: '1%',
    backgroundColor: '#019875',
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
    color: '#E9D460',
    marginBottom: '4%',
    fontSize: '20px'
  },
  bottomSection: {
    borderTop: '1px dashed #ecf0f1',
    margin: '10%',
    paddingTop: '3%',
    paddingLeft: '7%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#E9D460',
    margin: '0%',
    fontSize: '18px'
    
  },
  traits: {
    margin: '0%',
    paddingTop: '1%',
    paddingBottom: '2%',
    fontFamily: 'Roboto, sans-serif',
    color: '#ecf0f1',
    fontSize: '18px',
    marginBottom: '15px'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  infoButton: {
    display: 'flex',
    background: '#fff',
    width: '150px',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '15px',
    border: 'none',
    fontFamily: 'Candal, sans-serif',
    fontSize: '14px',
    color: '#F2784B',
    borderRadius: '0'
  },
  deleteButton: {
    display: 'flex',
    background: '#fff',
    width: '100px',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '15px',
    border: 'none',
    fontFamily: 'Candal, sans-serif',
    fontSize: '14px',
    color: '#F2784B',
    borderRadius: '0'
  }
}

const VillainCard = ({ villain, deleteVillain, showUniqueVillain }) => {
  return (
      <div style={styles.container}>
        <div style={styles.topSection}>
          <h2 style={styles.name}>{villain.name}</h2>
          <img style={styles.image} src={villain.img} />
        </div>
        <div style={styles.bottomSection}>
          <p style={styles.titles}>Universe:</p>
          <p style={styles.traits}>{villain.universe}</p>
          <p style={styles.titles}>Nemesis:</p>
          <p style={styles.traits}>{villain.nemesis}</p>
        </div>
        <div style={styles.buttons}>
          <button style={styles.infoButton} onClick={showUniqueVillain}>More Info</button>
          <button style={styles.deleteButton} onClick={deleteVillain}>Delete</button>
          <Link to={`/villains/${villain._id}`}>Edit Villain</Link>
      </div>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.object.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
  
}

export default VillainCard
