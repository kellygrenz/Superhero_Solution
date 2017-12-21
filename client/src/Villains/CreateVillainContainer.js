import React, {Component} from 'react'
import $ from 'jquery'
import CreateVillainForm from './CreateVillainForm'
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
  formSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#C0392B',
    borderRadius: '2px'
  }
}

class CreateVillainContainer extends Component {
  state ={
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onUniverseChange = (e) => this.setState({ universe: e.target.value })

  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })

  submitVillain = (e) => {
    e.preventDefault()
    const {name, img, universe, nemesis} = this.state
    const villain = {name, img, universe, nemesis}
    $.ajax({ 
      url: '/api/villains',
      method: 'POST',
      data: villain
    }).done((response) => {
      this.props.loadVillainsFromServer()
      this.props.history.push('/villains')
    })
  }

  render () {
    return (
      <div>
        <div style={styles.container}>
          <h2 style={styles.header}>Build Your Own Villain</h2>
          <h4 style={styles.subHeader}>Add a new villain to the collection</h4>
        </div>
        <div style={styles.formSection}>
        <CreateVillainForm
          onNameChange={this.onNameChange}
          onImageChange={this.onImageChange}
          onUniverseChange={this.onUniverseChange}
          onNemesisChange={this.onNemesisChange}
          submitVillain={this.submitVillain}
          heroes={this.props.heroes}
        />
        </div>
      </div>
    )
  }
}

export default withRouter(CreateVillainContainer)

