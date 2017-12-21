import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

const style = {
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
    fontFamily: 'Caveat, cursive',
    color: '#E9D460',
    marginBottom: '4%',
    fontSize: '40px'
  },
  stats: {
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
      <div style={style.container}>
        <div style={style.topSection}>
          <h2 style={style.name}>{villain.name}</h2>
          <img style={style.image} src={villain.img} />
        </div>
        <div style={style.stats}>
          <p style={style.titles}>Universe:</p>
          <p style={style.traits}>{villain.universe}</p>
          <p style={style.titles}>Nemesis:</p>
          <p style={style.traits}>{villain.nemesis ? villain.nemesis.name :'no nemesis'}</p>
        </div>
        <div style={style.buttons}>
          <button style={style.infoButton} onClick={showUniqueVillain}>More Info</button>
          <button style={style.deleteButton} onClick={deleteVillain}>Delete</button>
          <Link to={`/villain/${villain._id}`}>View Villain</Link>
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
