import React from 'react'

const style = {
  container: {
    display: 'flex',
    background: '#F2784B',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px'
    
  },
  headerImg: {
    display: 'flex',
    width: '100vw'
  },
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  heroHeader: {
    fontFamily: 'Candal, sans-serif',
    color: '#C0392B',
    marginTop: '2%'
  },
  villainHeader: {
    fontFamily: 'Candal, sans-serif',
    color: '#013243',
    marginTop: '2%',
    paddingLeft: '1%'
  },
  and: {
    fontFamily: 'Candal, sans-serif',
    color: '#fff',
    marginTop: '2%',
    marginLeft: '5px',
    marginRight: '5px'
  }
}

const Header = () =>
  <div style={style.container}>
        <div style={style.header}>
          <h1 style={style.heroHeader}>Superheroes</h1>
          <h1 style={style.and}> & </h1>
          <h1 style={style.villainHeader}>Villains</h1>
        </div>

        <img src="images/sh_header.jpg" style={style.headerImg}/>
  </div>



export default Header
