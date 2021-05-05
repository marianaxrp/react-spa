import React from 'react'
import ListaPosts from '../componentes/ListaPosts'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaPosts url={'/posts'} />
    </main>
  )
}

export default Home
