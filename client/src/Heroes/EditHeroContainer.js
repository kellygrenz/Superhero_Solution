import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types' 
import EditHeroForm from './EditHeroForm'

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
            />
            : <h1>loading.... </h1>
        }
        
        
      </div>
    )
  }
}

export default withRouter(EditHeroContainer)

