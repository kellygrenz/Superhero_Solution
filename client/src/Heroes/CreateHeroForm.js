import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    backgroundColor: '#EC644B',
    margin: '5%',
    padding: '30px',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#fff',
    fontSize: '20px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    display: 'flex',
    padding: '10px',
    border: 'none',
    marginBottom: '20px'
  },
  button: {
    display: 'flex',
    background: '#E9D460',
    width: '300px',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '35px',
    border: 'none',
    fontFamily: 'Candal, sans-serif',
    fontSize: '18px',
    color: '#fff',
    borderRadius: '0'
  }
}

const CreateHeroForm = ({ onNameChange, onSuperPowerChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit, villains }) => {
  return (
    <div style={styles.container}>
      <form>
        <div style={styles.section}>
          <label style={styles.titles}>Name: </label>
          <input style={styles.input} type='text' placeholder='Type Name Here' onChange={onNameChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Super Power: </label>
          <input style={styles.input} type='text' placeholder='Type Super Power Here' onChange={onSuperPowerChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Image: </label>
          <input style={styles.input} type='text' placeholder='Type Image URL Here' onChange={onImageChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Universe: </label>
          <input style={styles.input} type='text' placeholder='Type Universe Here' onChange={onUniverseChange} />
        </div>
        <div style={styles.section}>
          <label style={styles.titles}>Nemesis: </label>
          <select onChange={onNemesisChange}>
            <option>Nothing in here</option>
            {
              villains.map(villain => {
                return <option value={villain._id}>{villain.name}</option>
              })
            }
          </select>
          
        </div>
        <button style={styles.button} onClick={handleSubmit}> SUBMIT </button>
      </form>
    </div>
  )
}

CreateHeroForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  villains: PropTypes.array.isRequired
}

export default CreateHeroForm
