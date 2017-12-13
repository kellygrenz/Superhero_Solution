import React, {Component} from 'react'
import HeroesList from './HeroesList'
import Home from './Home'
import NavBar from './NavBar'
import $ from 'jquery'
import CreateHeroContainer from './CreateHeroContainer'
import VillainsList from './VillainsList'
import CreateVillainContainer from './CreateVillainContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

  componentDidMount () {
    this.loadHeroesFromServer()
    this.loadVillainsFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({ heroes: response.superHeroes })
    })
  }

  loadVillainsFromServer = () => {
    $.ajax({
      url: '/api/villains',
      method: 'GET'
    }).done((response) => {
      this.setState({ villains: response.villains })
    })
  }

  deleteHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadHeroesFromServer()
    })
  }

  deleteVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadVillainsFromServer()
    })
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/create-hero' render={() => <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer} />} />
          {
            this.state.heroes
            ? <Route path='/heroes' render={() =>  <HeroesList heroes={this.state.heroes} deleteHero={this.deleteHero} />} />
            : 'No Heroes'
          }
          <Route path='/create-villain' render={() => <CreateVillainContainer loadVillainsFromServer={this.loadVillainsFromServer} />} />
          {
            this.state.villains
            ? <Route path='/villains' render={() => <VillainsList villains={this.state.villains} deleteVillain={this.deleteVillain} />} />
            : 'No Villains'
          }
        </div>
      </Router>
    )
  }
}

export default App
