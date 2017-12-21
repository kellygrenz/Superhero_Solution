import React, {Component} from 'react'
import $ from 'jquery'
import {withRouter} from 'react-router-dom'
import HeroPage from './HeroPage'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#22313F'
  },
  name: {
    color: '#019875'
  }
}

class HeroContainer extends Component {
  state = {
    hero: undefined,
    comments: undefined
  }

  componentDidMount () {
    const heroId = this.props.match.params.heroId
    this.loadHero(heroId)
    
  }

  loadHero = (id) => {
    $.ajax({
      url: `/api/heroes/${id}`,
      method: 'GET'
    }).done((response) => {
      this.setState({ hero: response.hero, comments: response.hero.comments})
    })
  }


  render () {
    return (
      <div style={style.container}>
        {
          this.state.hero
          ?  <HeroPage hero={this.state.hero} comments={this.state.comments} />
          : 'No Hero is Available'
        }
       
      </div>
    )
  }
}

export default withRouter(HeroContainer)
