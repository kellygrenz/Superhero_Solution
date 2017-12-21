import React, {Component} from 'react'
import $ from 'jquery'
import CreateHeroForm from './CreateHeroForm'
import {
  withRouter
} from 'react-router-dom'

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
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#C0392B',
    borderRadius: '2px'
  }
}


class CreateHeroContainer extends Component {
  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value })

  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onUniverseChange = (e) => this.setState({ universe: e.target.value })

  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    $.ajax({
      url: '/api/heroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      this.props.loadHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }

  render() {
    
    return (
      <div>
        <div style={styles.container}>
          <h2 style={styles.header}>Create A Hero.</h2>
          <h4 style={styles.subHeader}>Add a new hero to the list.</h4>
        </div>
        <div style={styles.form}>
        <CreateHeroForm 
          villains={this.props.villains}
          onNameChange={this.onNameChange}
          onSuperPowerChange={this.onSuperPowerChange}
          onImageChange={this.onImageChange}
          onUniverseChange={this.onUniverseChange}
          onNemesisChange={this.onNemesisChange}
          handleSubmit={this.handleSubmit}
          hero={this.props.hero}
        />
        </div>
      </div>
    )
  }
}

export default withRouter(CreateHeroContainer)
