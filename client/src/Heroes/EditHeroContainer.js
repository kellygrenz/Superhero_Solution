import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types' 
import EditHeroForm from './EditHeroForm'

const style = {
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
  },
  formSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#C0392B',
    borderRadius: '2px'
  }
}

class EditHeroContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined,
    superPower: undefined,
    loading: true

  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  
  componentDidMount () {
    this.loadHeroFromServer()
  }

  onNameChange = (e) => this.setState({ name: e.target.value })
  onImgChange = (e) => this.setState({ img: e.target.value })
  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })
  onUniverseChange = (e) => this.setState({ universe: e.target.value })
  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })

  loadHeroFromServer= () => {
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'GET',
    }).done((response) => {
     const {name, img, nemesis, universe, superPower} = response.hero
      this.setState({ 
        name, 
        img,
        universe, 
        nemesis, 
        superPower,
        loading: false
      })
    })
  }

  submitHeroToServer = (e) => {
    e.preventDefault()
    const {name, img, universe, superPower, nemesis} = this.state
    const hero = {name, img, universe, superPower, nemesis}
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'PUT',
      data: hero
    }).done((response) => {
      console.log('RES FROM PUT', response)
      alert(`Hero ${response.data.name} has been updated`)
      this.props.history.push(`/hero/${response.data._id}`)
    })
  }

  render () {
    const {name, img, nemesis, universe, superPower} = this.state
    return (
      <div>
        <div style={style.container}>
          <h2 style={style.header}>Edit This Hero</h2>
          <h4 style={style.subHeader}>Make them even MORE heroic!</h4>
        </div>
        <div style={style.formSection}>
        {
          !this.state.loading
            ? <EditHeroForm 
              name={name}
              img={img}
              nemesis={nemesis}
              universe={universe}
              superPower={superPower}
              onImgChange={this.onImgChange}
              onNameChange={this.onNameChange}
              onNemesisChange={this.onNemesisChange}
              onUniverseChange={this.onUniverseChange}
              onSuperPowerChange={this.onSuperPowerChange}
              submitHeroToServer={this.submitHeroToServer}
              villains={this.props.villains}
            />
            : <h1>loading.... </h1>
        }
        </div>
        
        
      </div>
    )
  }
}

export default withRouter(EditHeroContainer)

