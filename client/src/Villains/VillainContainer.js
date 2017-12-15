import React, {Component} from 'react'
import { withRouter} from 'react-router-dom'
import $ from 'jquery'
import VillainPage from './VillainPage'

class VillainContainer extends Component {
state = {
  villain: undefined,
  loading: true
}

componentDidMount () {
  const villainId = this.props.match.params.villainId
  this.loadVillainFromServer(villainId)
}

loadVillainFromServer = (id) => {
  $.ajax({
    url: `/api/villains/${id}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
    this.setState({ villain: response.villain, loading: false})

  })
}


  render () {
    return (
      <div>
        <h1>Villain Container</h1>
        {
          !this.state.loading
          ? <VillainPage villain={this.state.villain}/>
          : 'These are not the villains you are looking for'
        }
      </div>
    )
  }
}

export default withRouter(VillainContainer)

