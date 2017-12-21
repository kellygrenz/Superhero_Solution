import React from 'react'
import PropTypes from 'prop-types'

const style = {
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


const EditHeroForm = ({
  name, img, superPower, universe, nemesis, onNameChange, onImgChange, onSuperPowerChange, onUniverseChange, onNemesisChange, submitHeroToServer, villains
}) =>
  <div style={style.container}>
    <form>
    <div style={style.section}>
        <label style={style.titles}>Name:</label>
        <input style={style.input} value={name} onChange={onNameChange}/>
      </div>

      <div style={style.section}>
        <label style={style.titles}>Img:</label>
        <input style={style.input} value={img} onChange={onImgChange}/>
      </div>

      <div style={style.section}>
        <label style={style.titles}>Super Power:</label>
        <input style={style.input} value={superPower} onChange={onSuperPowerChange}/>
      </div>

      <div style={style.section}>
        <label style={style.titles}>Universe:</label>
        <input style={style.input} value={universe} onChange={onUniverseChange}/>
      </div>

      <div style={style.section}>
        <label style={style.titles}>Nemesis:</label>
        <select onChange={onNemesisChange}>
          <option>this is an option</option>
          {
            villains.map(villain => {
              return <option value={villain._id}>{villain.name}</option>
            })
          }
        </select>
        
      </div>
      <button onClick={submitHeroToServer}>Submit </button>
    </form>
  </div>

  EditHeroForm.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    superPower: PropTypes.string.isRequired,
    universe: PropTypes.string.isRequired,
    nemesis: PropTypes.string.isRequired,
    onImgChange: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onNemesisChange: PropTypes.func.isRequired,
    onUniverseChange: PropTypes.func.isRequired,
    onSuperPowerChange: PropTypes.func.isRequired,
    submitHeroToServer: PropTypes.func.isRequired
  }

  export default EditHeroForm
  