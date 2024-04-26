import React from 'react'
import './Home.css'
import homeLogo from '../../assets/login.jpg'
const Home = () => {
  return (
    <>
        <h1 className='titulo'>Home</h1>

        <img src={homeLogo} className='img' alt="imagem tela inicial" />
    </>
  )
}

export default Home
