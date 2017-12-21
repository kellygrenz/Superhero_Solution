import React from 'react'

const style = {
  container: {
    display: 'flex',
    background: '#43ac96',
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
  hero: {
    fontFamily: 'Caveat, cursive',
    color: '#f6bb53',
    fontSize: '50px'
    
  },
  villain: {
    fontFamily: 'Caveat, cursive',
    color: '#432345',
    paddingLeft: '1%',
    fontSize: '50px'
  },
  and: {
    fontFamily: 'Caveat, cursive',
    color: '#fff',
    marginTop: '2%',
    fontSize: '50px',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '35px'
  }
}

const Header = () =>
  <div style={style.container}>
        <div style={style.header}>
          <h1 style={style.hero}>Superheroes</h1>
          <h1 style={style.and}> & </h1>
          <h1 style={style.villain}>Villains</h1>
        </div>

        <img src="images/sh_header.jpg" style={style.headerImg}/>
  </div>



export default Header
